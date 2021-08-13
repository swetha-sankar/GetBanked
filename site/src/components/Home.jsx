import React, {useState} from 'react';
import logo from '../assets/c1logo.png';
import {Grid} from '@material-ui/core';
import Header from '../components/Header';

function Home() {
    const [data, setData] = useState(0);

    return (
        <div>
            <Header/>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="capital-one-logo"/>
                <p>You've invested $ {data} </p>
                <button onClick={() => setData(data + 1)}>
                    Click here and invest a dollar
                </button>
            </header>

        </div>
    );
}

export default Home;
