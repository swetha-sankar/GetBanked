import React, {useState} from 'react';
import logo from '../assets/c1logo.png';
import {Box, Button, Typography} from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
    const [data, setData] = useState(0);

    return (
        <div>
            <Header/>

            <header className="App-header">
                <Box borderRadius = {10} > Loans reimagined </Box>
                <img src={logo} className="App-logo" alt="capital-one-logo"/>
                <Typography>You've invested $ {data} </Typography>
                <Button onClick={() => setData(data + 1)}>
                    Click here and invest a dollar
                </Button>
            </header>
            <Footer/>
        </div>
    );
}

export default Home;
