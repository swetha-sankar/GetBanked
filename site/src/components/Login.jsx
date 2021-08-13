import React, {useState, useEffect} from 'react';
import logo from '../assets/c1logo.png';
import {makeStyles, createStyles, Button, TextField} from "@material-ui/core";
import {useForm, Controller} from "react-hook-form";
import Header from '../components/Header';
import {Link as RouterLink} from "react-router-dom";

/**
 * Login
 *
 */


const Login = () => {
    const classes = useStyles();
    // React hook form
    const {handleSubmit, control} = useForm();
    // Set form elements
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <>
            <Header/>
            <br/>
            <br/>
            <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
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
                    rules={{required: 'Username required'}}
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
                <Button variant="contained" color="primary" size = 'medium' {...{
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
