import {Accounts} from "../types/accounts";

export var createNewAccount = (username, password, accountType, firstName, lastName, accountNumber, routingNumber) => {
    return true
}

export var authenticateAccount = (username, password, accountType) => {
    return true
}

export var getAccountData = (username) => {
    return { account: "Data" }
}

export var applyForLoan = (username, loanData) => {
    return true
}

export var getLoanApplications = () => {
    return [{loan: "applications"}]
}

export var getLoanApplication = (loanId) => {
    return {loan: "application"}
}

export var getAccountBalance = (username) => {
    return 0
}

export var getInvestmentBalance = (username) => {
    return 0
}

export var getLoanBalance = (username) => {
    return 0
}

export var invest = (username, amount) => {
    return true
}

export var withdraw = (username, amount) => {
    return true
}

export var getLoanStatus = (loanId) => {
    return "rejected"
}
