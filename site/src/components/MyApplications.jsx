import {useEffect, useRef, useState} from "react";
import ApplicationItem from "./ApplicationItem";
import {getAccount, getAllAccounts, getAllTransactions, getTransaction} from "../utils/api";

function MyApplications() {

    const [applications, setApplications] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(async () => {
        let transactions = []
        let account = await getAccount("rohan")
        let t = Object.keys(account.transactions)
        for(let i = 0; i < t.length; i++) {
            transactions.push(<ApplicationItem props={await getTransaction(t[i])} key={i}/>)
        }
        if(!loaded) setApplications(transactions)
        setLoaded(true)
    }, ["username"]) //TODO: create dependency for username

    return (<div>
        { applications }
    </div>)

}

export default MyApplications;