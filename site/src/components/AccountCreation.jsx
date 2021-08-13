import React, {useState} from 'react';
import logo from '../assets/c1logo.png';
import {makeStyles, Button, TextField, Select} from "@material-ui/core";
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import * as api from '../utils/api'

/**
 * Account creation form
 *
 */
const AccountCreation = () => {
    const classes = useStyles();

    const location = useLocation();
    let accountType = "investor";
    if (location.state) {
        if (location.state.type === "borrower") {
            accountType = "borrower";
        }
    }

    // Set form elements
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [type, setType] = useState(accountType);

    const onSubmit = () => {
        console.log(api.createAccount(username, type, firstName + ' ' + lastName, email, pass, type === 'investor' ? 1000 : 0))
    };
    return (
        <>
            <br/>
            <br/>
            <form className={classes.root}>
                <h1>Create Account</h1>
                <Select
                    label="Account Type"
                    defaultValue={type}
                    onChange={event => setType(event.target.value)}
                >
                    <option value="investor">Investor</option>
                    <option value="borrower">Borrower</option>
                </Select>
                <TextField
                    label="First Name"
                    variant="filled"
                    onChange={event => setFirstName(event.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="filled"
                    onChange={event => setLastName(event.target.value)}
                />
                <TextField
                    label="Email"
                    variant="filled"
                    type={'email'}
                    onChange={event => setEmail(event.target.value)}
                />
                <TextField
                    label="Username"
                    variant="filled"
                    onChange={event => setUsername(event.target.value)}
                />
                <TextField
                    label="Password"
                    variant="filled"
                    type={'password'}
                    onChange={event => setPass(event.target.value)}
                />
                <Button onClick={onSubmit} variant="contained" color="primary" size = 'medium'>
                    Submit
                </Button>
            </form>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3),


        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
            borderRadius: 20,

        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));
export default AccountCreation;
