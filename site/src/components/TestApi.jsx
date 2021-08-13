import * as utils from '../utils/api.js'

function TestApi() {
    console.log("all accounts: ", utils.getAllAccounts());
    console.log("get username account: ", utils.getAccount("username"));
    console.log("get transaction: ", utils.getTransaction("192020"));
    console.log("get all transactions: ", utils.getAllTransactions() );
    console.log("get funds: ", utils.getFunds());
    console.log("get withdrawals: ", utils.getWithdrawals());

    console.log("create account: ", utils.createAccount("rohoan", "borrower", "rohan", "test@me.com", "passwrd"));
    console.log("create transaction: ", utils.createTransaction("username", "investment", 248, 1, 2))
    
    console.log("get new account: ", utils.getAllAccounts());
    console.log("get new transaction: ", utils.getAllTransactions());

    console.log("update transactions: ", utils.updateUserTransactions("rohan", "20", "investment", 6))
    console.log("update funds: ", utils.updateFunds(921))
    console.log("update withdrawals: ", utils.updateWithdrawals(10))


    return ('')
}
export default TestApi