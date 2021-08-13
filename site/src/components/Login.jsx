import React, {useState} from 'react';
import {makeStyles, Button, TextField} from "@material-ui/core";
import Header from '../components/Header';
import {Link as RouterLink} from "react-router-dom";
import * as api from '../utils/api'
import { useGlobalState } from '../state';

/**
 * Login
 *
 */

const Login = () => {
    const classes = useStyles();
    // Set form elements
    const [globalStateValue, globalStateUpdate] = useGlobalState('username');
    const [pass, setPass] = useState('');

    const onSubmit = () => {
        api.getAccount(globalStateValue['username'])
    };
    return (
        <>
            <Header/>
            <br/>
            <br/>
            <form className={classes.root}>
                <h1>Login</h1>
                <TextField
                    label="Username"
                    variant="filled"
                    onChange={event => globalStateUpdate({ username: event.target.value })}
                />
                <TextField
                    label="Password"
                    variant="filled"
                    type={'password'}
                    onChange={event => setPass(event.target.value)}
                />
                <Button onClick={onSubmit} variant="contained" color="primary" size = 'medium' {...{
                        color: "inherit",
                        to: '/home',
                        component: RouterLink,
                    }} >
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
export default Login;
