import React, {useState, useEffect} from 'react';
import Header from './Header';
import {makeStyles, Button, TextField} from "@material-ui/core";
import * as api from '../utils/api'
import { useGlobalState } from '../state';

export default function NewTransaction() {
    const loanPeriod = 1 // 1 year loan
    const loanInterest  = 2 // 2 percent interest

    const classes = useStyles()
    const [globalStateValue, globalStateUpdate] = useGlobalState('username')
    const [transactionAmount, setTransactionAmount] = useState(0)
    const [user, setUser] = useState()

    const onSubmit = () => {
        api.createTransaction(globalStateValue['username'], user.type === 'investor' ? 'investment' : 'loan', transactionAmount, loanPeriod, loanInterest)
    }

    useEffect(() => {
        console.log('useEffect started')
        api.getAccount(globalStateValue['username'])
            .then(userData => setUser(userData))
        console.log(user)
        console.log('useEffect finished')
    }, [globalStateValue['username']])

    if (!user) {
        return null
    }

    return (
        <>
            <Header />
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
                <Button onClick={onSubmit} variant="contained" color="primary" size = 'medium'>
                    Create Transaction
                </Button>
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