import {useEffect, useRef, useState} from "react";
import {applyForLoan, getLoanApplications, getLoanStatus} from "../utils/database";

function ApplicationItem() {

    const loanAmount = useRef(HTMLInputElement)
    const loanDescription = useRef(HTMLTextAreaElement)

    getLoanStatus()

    const [applications, setApplications] = useState([])

    //TODO: make the account type check work
    // if(accountType != Accounts.BORROWER) return <Redirect to="/home"/>

    const apply = () => {
        if(loanAmount == null || loanDescription == null) return
        //TODO: Implement real username
        applyForLoan("username", {
            amount: loanAmount.current.value,
            description: loanDescription.current.value
        })
        //TODO: redirect to confirmation page
    }

    return (<div>

    </div>)

}

export default ApplicationIteam;