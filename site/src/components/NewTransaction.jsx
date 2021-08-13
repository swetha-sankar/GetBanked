import React, {useState, useEffect} from 'react';
import Header from './Header';
import {makeStyles, Button, TextField} from "@material-ui/core";
import * as api from '../utils/api'
import { useGlobalState } from '../state';
import { loanPeriod, interestRate } from '../utils/constants';

export default function NewTransaction() {
    const classes = useStyles()
    const [globalStateValue, globalStateUpdate] = useGlobalState('username')
    const [transactionAmount, setTransactionAmount] = useState(0)
    const [user, setUser] = useState()
    const [transactionComplete, setTransactionComplete] = useState(false)

    const onSubmit = () => {
        api.createTransaction(globalStateValue['username'], user.type === 'investor' ? 'investment' : 'loan', transactionAmount, loanPeriod, interestRate)
        setTransactionComplete(true)
    }

    // Due 12 months later (1 year)
    const dueDate = (date) => {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + (date.getFullYear() + 1)
    }

    useEffect(() => {
        api.getAccount(globalStateValue['username'])
            .then(userData => setUser(userData))
    }, [globalStateValue['username']])

    if (!user) {
        return null
    }

    if (!transactionComplete) {
        return (
            <>
                <br />
                <br />
                <form className={classes.root}>
                    <h1>Transactions</h1>
                    <h2>New {user.type === 'investor' ? 'Investment' : 'Loan Application'}</h2>
                    <TextField
                        label="Transaction Amount"
                        variant="filled"
                        onChange={event => setTransactionAmount(event.target.value)}
                    />
                    <h4>Interest Rate: {interestRate}%</h4>
                    <h4>Total Due: {transactionAmount * (1 + interestRate / 100)}</h4>
                    <h4>Due: {dueDate(new Date())}</h4>
                    <h4>Current Balance: {user.total}</h4>
                    <h4>New Balance: {user.total + transactionAmount * (user.type === 'investor' ? -1 : 1)}</h4>
                    <Button onClick={onSubmit} variant="contained" color="primary" size = 'medium'>
                        Create Transaction
                    </Button>
                </form>
            </>
        )
    }

    return (
        <>
            <br />
            <br />
            <form className={classes.root}>
                <h1>New Balance: {user.total + transactionAmount * (user.type === 'investor' ? -1 : 1)}</h1>
            </form>
        </>
    )
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