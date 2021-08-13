import React, {useState} from 'react';
import logo from '../assets/c1logo.png';
import {Box} from '@material-ui/core';
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
                <p>You've invested $ {data} </p>
                <button onClick={() => setData(data + 1)}>
                    Click here and invest a dollar
                </button>
            </header>
            <Footer/>
        </div>
    );
}

export default Home;
