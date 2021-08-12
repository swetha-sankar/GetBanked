import React, {useRef, useState} from 'react';
import {authenticateAccount} from "../utils/database";
import {Accounts} from "../types/accounts";

function Login({navigation}){
    const[user, setUser] = useState('');
    const[pass, setPass] = useState('');
    const[loggedIn, setLoggedIn] = useState(false);

    const [errorMessage, setErrorMessage] = useState("")

    const usernameRef = useRef(HTMLInputElement)
    const passwordRef = useRef(HTMLInputElement)
    const accountTypeRef = useRef(HTMLSelectElement)

    const login = () => {
        if(usernameRef == null || passwordRef == null || accountTypeRef == null) return
        if (authenticateAccount(usernameRef.current.value, passwordRef.current.value, accountTypeRef.current.value)) {
            //    do login things
            //    redirect to main page
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
            <p> Enter Username </p> <input ref={usernameRef}/>
            <p> Enter Password</p> <input ref={passwordRef}/>
            <h1>{errorMessage}</h1>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;