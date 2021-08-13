import {useEffect, useState} from "react";
import ApplicationItem from "./ApplicationItem";
import {getAccount, getTransaction} from "../utils/api";
import {useGlobalState} from "../state";

function MyApplications() {

    const [applications, setApplications] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [globalStateValue, globalStateUpdate] = useGlobalState('username');

    useEffect(async () => {
        if (globalStateValue !== '') {
            let transactions = []
            let account = await getAccount(globalStateValue["username"])
            let t = Object.keys(account.transactions)
            for(let i = 1; i < t.length; i++) {
                transactions.push(<ApplicationItem txn={await getTransaction(t[i])} key={i}/>)
            }
            if(!loaded) setApplications(transactions)
            setLoaded(true)
        }
    }, [globalStateValue["username"]])

    return (
        <div>
            <p className="blurb-home px-5 pb-0 pt-4">YOUR TRANSACTIONS</p>
            { applications }
        </div>
    )
}

export default MyApplications;