export async function getAllAccounts () {
    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/accounts/.json");
    const body = await response.json();

    return body;
}

export async function getAccount (username) {
    const response = await fetch(`https://get-banked-62777-default-rtdb.firebaseio.com/accounts/${encodeURIComponent(username)}.json`);
    const body = await response.json();    

    return body;
}

export async function getTransaction (txnNum) {
    const response = await fetch(`https://get-banked-62777-default-rtdb.firebaseio.com/transactions/${encodeURIComponent(txnNum)}.json`);
    const body = await response.json();

    return body;
}

export async function getAllTransactions () {
    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/transactions/.json");
    const body = await response.json();

    return body;
}

export async function getFunds () {
    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/funds/.json");
    const body = await response.json();

    return body;
}

export async function getWithdrawals () {
    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/withdrawals/.json");
    const body = await response.json();

    return body;
}

export async function createAccount (username, type, name, email, password) {
    const allAccounts = await getAllAccounts();
    const accountNum = Object.keys(allAccounts).length + 1;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        [username] : {
          "id": accountNum,
          "type": type,
          "name": name,
          "email": email,
          "password": password,
          "total": 0,
          "transactions": {
            "0": "account creation"
          }
        }
      });

    const requestOptions = {
        method: 'PATCH',
        headers: headers,
        body: raw
    };
    
    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/accounts/.json", requestOptions);
    const body = await response.json();

    return body;
}

export async function createTransaction(username, transactionType, transactionAmount, period, interest) {
    const user = await getAccount(username)
    const allTransactions = await getAllTransactions()
    const newTransactionNumber = String(Object.keys(allTransactions).length + 1)

    const headers = new Headers()
    headers.append("Content-Type",  "application/json")

    const raw = JSON.stringify({
        [newTransactionNumber] : {
            "account": user.id,
            "amount": transactionAmount,
            "type": transactionType,
            "interest": interest,
            "period": period,
            "status": "active"
        }
    })

    const requestOptions = {
        method: 'PATCH',
        headers: headers,
        body: raw
    }

    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/transactions/.json", requestOptions)
    const body = await response.json()

    const updateUserTransactionsReturn = await updateUserTransactions(username, newTransactionNumber, transactionType, transactionAmount);
    let updateFundsOrWithdrawals;
    
    if (transactionType === "investment") {
        const currentFunds = await getFunds()
        updateFundsOrWithdrawals = await updateFunds(currentFunds + transactionAmount)
    } else {
        const currentWithdrawals = await getWithdrawals()
        updateFundsOrWithdrawals = await updateWithdrawals(currentWithdrawals + transactionAmount)
    }

    return body
}

export async function updateUserTransactions(username, transactionId, transactionType, transactionAmount) {
    const headers = new Headers()
    headers.append("Content-Type", "application/json");

    const raw = JSON.stringify({ [transactionId]: transactionType });

    const requestOptions = {
        method: 'PATCH',
        headers: headers,
        body: raw
    };

    const response = await fetch(`https://get-banked-62777-default-rtdb.firebaseio.com/accounts/${encodeURIComponent(username)}/transactions/.json`, requestOptions)
    const body = await response.json();

    const accountResponse = await getAccount(username);
    const accountBody = await accountResponse.json();
    const oldTotal = accountBody.total;
    
    const updateTotal = await updateUserTotal(username, oldTotal + transactionAmount );

    return body
}

export async function updateUserTotal(username, newTotal) {
    const requestOptions = {
        method: 'PATCH',
        body: newTotal
    }

    const response = await fetch(`https://get-banked-62777-default-rtdb.firebaseio.com/accounts/${encodeURIComponent(username)}/.json`, requestOptions)
    const body = await response.json()

    return body
}

export async function updateFunds(newFunds) {
    const requestOptions = {
        method: 'PUT',
        body: newFunds
    };

    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/funds/.json", requestOptions)
    const body = await response.json()

    return body
}

export async function updateWithdrawals(newWithdrawals) {
    const requestOptions = {
        method: 'PUT',
        body: newWithdrawals
    }

    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/withdrawals/.json", requestOptions)
    const body = await response.json()

    return body
}
