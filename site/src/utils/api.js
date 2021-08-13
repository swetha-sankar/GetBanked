// API Function Calls
// By Alice Wang and Rohan Uttamsingh
// Last Updated 8/12/2021

// FOR MORE INFORMATION ABOUT THE API AND DATABASE, SEE THE README

/**
 * Returns all the accounts in the system in JSON format
 * To access specific accounts: body.<username>
 * See README for detailed information about the account info provided
 * 
 * @returns all accounts (investors and borrowers)
 */
export async function getAllAccounts () {
    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/accounts/.json");
    const body = await response.json();

    return body;
}

/**
 * Returns the specific account information based on username
 * See README for detailed info about the account information provided
 * 
 * @param {String} username account username
 * @returns account information
 */
export async function getAccount (username) {
    const response = await fetch(`https://get-banked-62777-default-rtdb.firebaseio.com/accounts/${encodeURIComponent(username)}.json`);
    const body = await response.json();    

    return body;
}

/**
 * Returns all transactions that have been through the system
 * A transaction is defined to be either an investment or loan
 * See README for detailed info about the transaction information provided
 * 
 * @returns Information about all transactions ever created
 */
export async function getAllTransactions () {
    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/transactions/.json");
    const body = await response.json();

    return body;
}

/**
 * Returns information regarding a specific transaction
 * 
 * @param {String} txnNum Transaction number
 * @returns Information about the transaction
 */
export async function getTransaction (txnNum) {
    const response = await fetch(`https://get-banked-62777-default-rtdb.firebaseio.com/transactions/${encodeURIComponent(txnNum)}.json`);
    const body = await response.json();

    return body;
}

/**
 * Returns total amount of investments in dollars
 * 
 * @returns Total amount of investments (USD)
 */
export async function getFunds () {
    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/funds/.json");
    const body = await response.json();

    return body;
}

/**
 * Returns total amount of loans in dollars
 * 
 * @returns Total amount of loans (USD)
 */
export async function getWithdrawals () {
    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/withdrawals/.json");
    const body = await response.json();

    return body;
}

/**
 * Creates an account and adds it to the database
 * User can only be an INVESTOR or BORROWER account
 * Password is not currently hashed, but should be in future iterations
 * 
 * @param {String} username username of the account
 * @param {String} type investor or borrower account
 * @param {String} name account owner's name
 * @param {String} email account owner's email
 * @param {String} password account password
 * @returns JSON object of account information
 */
export async function createAccount (username, type, name, email, password) {
    const allAccounts = await getAllAccounts();
    const accountNum = Object.keys(allAccounts).length + 1;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // transaction is created with a 0 transaction to satisfy Firebase
    // 0 for transaction number is reserved for this purpose only
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

/**
 * Creates a transaction and adds it to the table of all transactions
 * Also adds the transaction to the user's information and updates
 * their total
 * 
 * @param {String} username account username
 * @param {String} transactionType either investment or loan
 * @param {Number} transactionAmount amount of transaction (USD)
 * @param {Number} period duration of loan/investment (months)
 * @param {Number} interest interest on loan/investment (percentage)
 * @returns JSON object of transaction information
 */
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

    // update transaction on user side
    const updateUserTransactionsReturn = await updateUserTransactions(username, newTransactionNumber, transactionType, transactionAmount);
    
    // update system's funds/withdrawals based on this transaction
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

/**
 * Updates the list of transactions for a specific user
 * 
 * @param {String} username username of the user
 * @param {String} transactionId ID of the transaction
 * @param {String} transactionType type of transaction (investment or loan)
 * @param {Number} transactionAmount amount of transaction (USD)
 * @returns JSON object of newly added transaction info
 */
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

    // Update the user's total investments/loans based on the transaction
    // Get the user's old total in their account
    const accountResponse = await getAccount(username);
    const accountBody = await accountResponse.json();
    const oldTotal = accountBody.total;
    
    const updateTotal = await updateUserTotal(username, oldTotal + transactionAmount );

    return body
}

/**
 * Updates the total amount of transactions for a specific user
 * 
 * @param {String} username username of the user
 * @param {Number} newTotal new total amount of investments/loans (USD)
 * @returns new total
 */
export async function updateUserTotal(username, newTotal) {
    const requestOptions = {
        method: 'PATCH',
        body: newTotal
    }

    const response = await fetch(`https://get-banked-62777-default-rtdb.firebaseio.com/accounts/${encodeURIComponent(username)}/.json`, requestOptions)
    const body = await response.json()

    return body
}

/**
 * Updates the total amount of funds (investments) in the system
 * 
 * @param {Number} newFunds new total amount of funds (USD)
 * @returns new total amount of funds (USD)
 */
export async function updateFunds(newFunds) {
    const requestOptions = {
        method: 'PUT',
        body: newFunds
    };

    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/funds/.json", requestOptions)
    const body = await response.json()

    return body
}

/**
 * Updates the total amount of withdrawals (loans) in the system
 * 
 * @param {Number} newWithdrawals new total amount of withdrawals (USD)
 * @returns new total amount of withdrawals (USD)
 */
export async function updateWithdrawals(newWithdrawals) {
    const requestOptions = {
        method: 'PUT',
        body: newWithdrawals
    }

    const response = await fetch("https://get-banked-62777-default-rtdb.firebaseio.com/withdrawals/.json", requestOptions)
    const body = await response.json()

    return body
}
