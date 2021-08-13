import {useRef} from "react";
// import {applyForLoan} from "../utils/database";

function LoanApplication() {

    const loanAmount = useRef(HTMLInputElement)
    const loanDescription = useRef(HTMLTextAreaElement)

    //TODO: make the account type check work
    // if(accountType != Accounts.BORROWER) return <Redirect to="/home"/>

    const apply = () => {
        if(loanAmount == null || loanDescription == null) return
        //TODO: Implement real username
        // applyForLoan("username", {
        //     amount: loanAmount.current.value,
        //     description: loanDescription.current.value
        // })
        //TODO: redirect to confirmation page
    }

    return (<div>
        <p>How much do you need to loan?</p> <input type={"text"} ref={loanAmount}/>
        <p>Please describe what you need this loan for:</p>
        <textarea ref={loanDescription}/>
        <button onClick={apply}>Submit Loan Application</button>
    </div>)

}

export default LoanApplication;