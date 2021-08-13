import {AppBar, Button, Toolbar, Typography, makeStyles} from "@material-ui/core"
import React from "react";
import {Link} from "react-router-dom";
import {useGlobalState} from "../state";

const headerData = [
    {
        label: "Create Account",
        href: "/account-creation",
    },
    {
        label: "Log In",
        href: "/login",
    },
    {
        label: "New Transaction",
        href: "/new-transaction",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Manage Account",
        href: "manage"
    },
];

export default function Header() {
    const [globalStateValue, globalStateUpdate] = useGlobalState('username');
    const { header, title, toolbar, button } = useStyles();

    let headerData;

    if (globalStateValue === '') {
        headerData = [
            {
                label: "Create Account",
                href: "/account-creation",
            },
            {
                label: "Log In",
                href: "/login",
            },
            {
                label: "About Us",
                href: "/about",
            },
        ];
    } else {
        headerData = [
            {
                label: "Manage Account",
                href: "manage"
            },
            {
                label: "New Transaction",
                href: "/new-transaction",
            },
            {
                label: "About Us",
                href: "/about",
            },
        ];
    }

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                <Link to="/home" style={{textDecoration: "none"}}>{appTitle}</Link>
                <div>
                    {createButtons()}
                </div>
            </Toolbar>
        );
    };

    const appTitle = (
        <Typography variant="h3" component="h1" className={title}>
            GetBanked
        </Typography>
    );

    const createButtons = () => {
        return headerData.map(({label, href}) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: Link,
                    }} 
                    className={button}>
                    {label}
                </Button>
            );
        });
    };
    return (
        <header>
            <AppBar position="static" className={header}> {displayDesktop()} </AppBar>
        </header>
    );
}

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#08B2E3",
    },
    title:{
        fontSize: 40,
        padding: 20,
        color: "#fff",
        textAlign: "left",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    button: {
        fontSize: 18,
        padding: 15
    }

}));


