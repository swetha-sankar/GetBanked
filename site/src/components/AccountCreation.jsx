import React, {useState, useEffect} from 'react';
import logo from '../assets/c1logo.png';
import {makeStyles, createStyles, Button, TextField} from "@material-ui/core";
import {useForm, Controller} from "react-hook-form";

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
const AccountCreation = ({accountType}) => {
    const classes = useStyles();
    // React hook form
    const {handleSubmit, control} = useForm();
    // Set form elements
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <h1>Create Account</h1>
                <h2> {accountType}</h2>
                <Controller
                    name="First Name"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => (
                        <TextField
                            label="First Name"
                            variant="filled"
                            value={value}
                            onChange = {onChange}
                            onChangeText={text => setFirstName({firstName: text})}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{required: 'First name required'}}
                />
                <Controller
                    name="Last Name"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => (
                        <TextField
                            label="Last Name"
                            variant="filled"
                            value={value}
                            onChange = {onChange}
                            onChangeText={text => setLastName({lastName: text})}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{required: 'First name required'}}
                />

                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => (
                        <TextField
                            label="Email"
                            variant="filled"
                            value={value}
                            onChange = {onChange}
                            onChangeText={text => setEmail({email: text})}
                            error={!!error}
                            helperText={error ? error.message : null}
                            type="email"
                        />
                    )}
                    rules={{required: 'Email required'}}
                />
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => (
                        <TextField
                            label="Username"
                            variant="filled"
                            value={value}
                            onChange = {onChange}
                            onChangeText={text => setUsername({username: text})}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}
                    rules={{required: 'First name required'}}
                />
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange, value}, fieldState: {error}}) => (
                        <TextField
                            underlineShow={false}
                            required
                            value={value}
                            variant="filled"
                            type={'password'}
                            onChange = {onChange}
                            placeholder={'Password'}
                            helperText={error ? error.message : null}
                            error={!!error}
                            onChangeText={text => setPass({pass: text})}
                            inputStyle={{color: 'white', padding: '0 25px'}}
                        />

                    )}
                    rules={{required: 'Password required'}}
                />


                <Button variant="contained" color="primary" size = 'medium'>
                    Submit
                </Button>
            </form>
        </>
    );
}
export default AccountCreation;
