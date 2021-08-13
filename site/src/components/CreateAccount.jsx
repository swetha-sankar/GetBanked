import {createRef, useState} from "react";
import {createNewAccount} from "../utils/database";


function CreateAccount() {

    const [accountType, setAccountType] = useState(Accounts.BORROWER)
    const [errorMessages, setErrorMessages] = useState("")

    const firstName = createRef(HTMLInputElement)
    const lastName = createRef(HTMLInputElement)
    const accountOptions = createRef(HTMLSelectElement)
    const email = createRef(HTMLInputElement)
    const password = createRef(HTMLInputElement)
    const accountNo = createRef(HTMLInputElement)
    const routingNo = createRef(HTMLInputElement)

    let create = () => {
        if(firstName == null || lastName == null || email == null || password == null || accountNo == null || routingNo == null) return
        if(createNewAccount(email.current.value, password.current.value, accountType, firstName.current.value, lastName.current.value, accountNo.current.value, routingNo.current.value)) {
        //    set login things
        //    redirect to homepage
        } else {
            setErrorMessages("Account creation failed, please try different credentials.")
        }
    }

    return (
        <div>
            <p>I am a: </p>
            <select onChange={() => setAccountType(accountOptions.current.value)} ref={accountOptions}>
                <option value={Accounts.BORROWER} selected={true}>Borrower</option>
                <option value={Accounts.INVESTOR}>Investor</option>
            </select>
            <p>First Name</p> <input type={"text"} ref={firstName}/>
            <p>Last Name</p> <input type={"text"} ref={lastName}/>
            <p>Email Name</p> <input type={"text"} ref={email}/>
            <p>Password Name</p> <input type={"password"} ref={password}/>
            <p>Bank Account Number</p> <input type={"text"} ref={accountNo}/>
            <p>Bank Routing Number</p> <input type={"text"} ref={routingNo}/>
            <p>{errorMessages}</p>
            <button onClick={create}>Submit</button>
        </div>
    )

}

export default CreateAccount;