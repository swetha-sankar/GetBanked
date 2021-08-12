import React, {useRef, useState} from 'react';
import {authenticateAccount} from "../utils/database";
import {Accounts} from "../types/accounts";
import {Redirect} from "react-router-dom";

function Login(){
    const [errorMessage, setErrorMessage] = useState("")

    const usernameRef = useRef(HTMLInputElement)
    const passwordRef = useRef(HTMLInputElement)
    const accountTypeRef = useRef(HTMLSelectElement)

    // if(loggedIn) {
    //     return <Redirect to={"/home/"}/>
    // }

    const login = () => {
        if(usernameRef == null || passwordRef == null || accountTypeRef == null) return
        if (authenticateAccount(usernameRef.current.value, passwordRef.current.value, accountTypeRef.current.value)) {
            // setUsername(usernameRef.current.value)
            // setPassword(usernameRef.current.value)
            // setLoggedIn(true)
            return <Redirect to={"/home/"}/>
        } else {
            setErrorMessage("Login Failed, please try again")
        }
    }

    return (
        <div>
            <p>What kind of account do you have?</p>
            <select ref={accountTypeRef}>
                <option value={Accounts.ADMIN}>Admin</option>
                <option value={Accounts.BORROWER}>Borrower</option>
                <option value={Accounts.INVESTOR}>Investor</option>
            </select>
            <p> Enter Username </p> <input ref={usernameRef} type={"text"}/>
            <p> Enter Password</p> <input ref={passwordRef} type={"password"}/>
            <h1>{errorMessage}</h1>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;