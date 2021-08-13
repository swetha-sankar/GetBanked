import React, { useState } from 'react';
import logo from '../assets/c1logo.png';

function Home() {
    const [data, setData] = useState(0);

    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="capital-one-logo" />
                <p>You've invested $ {data} </p>
                <button onClick={() => setData(data + 1)}>
                    Click here and invest a dollar
                </button>
            </header>
        </div>
    );
}
export default Home;
