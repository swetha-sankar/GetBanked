import {AppBar, Button, Toolbar, Typography, makeStyles} from "@material-ui/core"
import React from "react";
import {Link as RouterLink} from "react-router-dom";

const headerData = [
    {
        label: "Home",
        href: "/home",
    },
    {
        label: "New Transaction",
        href: "/new-transaction",
    },
    {
        label: "Log In",
        href: "/login",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Create Account",
        href: "/account-creation",
    },
];


export default function Header() {
    const { header, title } = useStyles();
    const displayDesktop = () => {
        return (
            <Toolbar>
                {appTitle}
                {createButtons()}
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
                        component: RouterLink,
                    }} >
                    {label}
                </Button>
            );
        });
    };
    return (
        <header>
            <AppBar className={header}> {displayDesktop()} </AppBar>
        </header>
    );
}
const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#08B2E3",
  },
title:{
      fontWeight: 100,
      padding: 10,
    color: "#EFE9F4",
    textAlign: "left",
  },

}));


