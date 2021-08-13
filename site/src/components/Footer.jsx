import {AppBar, Container, Typography, Toolbar, makeStyles} from "@material-ui/core"
import React from "react";


export default function Footer() {
    const { footer, title } = useStyles();
    return (
        <AppBar position="static"  className = {footer}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="h6" component="h1" className={title} position>
                © 2021 GetBanked
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    );
}
const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#08B2E3",
  },
  title: {
    fontWeight: 20,
      padding: 5,
    color: "#EFE9F4",
    textAlign: "left",
  },

}));


