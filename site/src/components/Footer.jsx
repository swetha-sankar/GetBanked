import {AppBar, Container, Typography, Toolbar, makeStyles} from "@material-ui/core"
import React from "react";


export default function Footer() {
    const { footer, title, toolbar } = useStyles();
    return (
        <AppBar position="static"  className = {footer}>
            <Toolbar className={toolbar}>
                <Typography variant="h6" component="h1" className={title}>
                    © 2021 GetBanked
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: "#08B2E3",
    },
    title: {
        fontSize: 20,
        padding: 5,
        color: "#fff",
        textAlign: "left",
    },
    toolbar: {
        marginLeft: 25
    }

}));


