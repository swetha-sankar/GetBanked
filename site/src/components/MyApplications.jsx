import {useEffect, useRef, useState} from "react";
import {applyForLoan, getLoanApplications} from "../utils/database";
import ApplicationItem from "./ApplicationItem";

function MyApplications() {

    const loanAmount = useRef(HTMLInputElement)
    const loanDescription = useRef(HTMLTextAreaElement)

    const [applications, setApplications] = useState([])

    //TODO: make the account type check work
    // if(accountType != Accounts.BORROWER) return <Redirect to="/home"/>

    useEffect(() => {
        let apps = getLoanApplications()
        for(let i = 0; i < applications.length; i++) {
            apps.push(<ApplicationItem children={}/>)
        }
        setApplications(apps)
    }, ["username"]) //TODO: create dependency for username

    return (<div>
        { applications }
    </div>)

}

export default MyApplications;