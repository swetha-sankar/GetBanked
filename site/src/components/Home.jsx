import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container w-100">
            <div className="p-5 row">
                <div className="light col-1"></div>
                <div className="ps-3 m-auto blurb-home col-7 py-5">
                    <p className="w-75">
                        Looking to get more involved your finances 
                        but don't know where to start?
                    </p>
                    <p className="w-75">We have options for people looking to invest and borrow!</p>
                </div>
                <div className="ps-3 col-4 m-auto py-5">
                    <div className="d-flex flex-column">
                        <p className="blurb-home">Get Started Here</p>
                        <Link to={{
                                pathname: "/account-creation",
                                state: { type: "investor"}
                            }}
                        >
                            <button type="button" className="btn btn-light mb-3 button-bright w-50">Invest</button>
                        </Link>
                        <Link to={{
                                pathname: "/account-creation",
                                state: { type: "borrower"}
                            }}
                        >
                            <button type="button" className="btn btn-light button-bright w-50">Borrow</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-5 pt-0 row">
                <div className="green col-1"></div>
                <div className="px-3 blurb-home col-5">
                    <p className="blurb-home pt-5">Why GetBanked?</p>
                    <p className="text-home">
                        GetBanked is designed and developed with one overarching mission: to bring banking
                        to everyone. What this means in practice is building trust and engagement with the
                        Gen-Z population and previously unbanked population.
                    </p>
                    <p className="text-home">
                        We have simplified the process into two account types: Investor and Borrower.
                    </p>
                </div>
                <div className="px-3 col-3">
                    <div className="d-flex flex-column">
                        <p className="blurb-home pt-5">Who is an Investor?</p>
                        <p className="text-home">
                            Investors are those who might not know what to do with their
                            money at this point in time. Perhaps they have saved up a bit of money
                            and would like to start their investment journey.
                        </p>
                        <p className="text-home">
                            There are many benefits:
                        </p>
                        <ul className="text-home">
                            <li>Better interest rates</li>
                            <li>Flexibility to invest in small amounts</li>
                            <li>Easy integration with existing Capital One services</li>
                        </ul>
                    </div>
                </div>
                <div className="px-3 col-3">
                    <div className="d-flex flex-column">
                        <p className="blurb-home pt-5">Who is a Borrower?</p>
                        <p className="text-home">
                            Borrowers are those who may have been excluded from traditional
                            banking. They might not have had previous support and access to banks.
                            They are looking to get involved with opening a bank account and
                            starting their financial journey, but might not have the initial resources
                            to do so.
                        </p>
                        <p className="text-home">
                            There are many benefits:
                        </p>
                        <ul className="text-home">
                            <li>{"Access to micro-loans (< $1000)"}</li>
                            <li>Better interest rates</li>
                            <li>Easy on-boarding and exploration</li>
                            <li>Smooth transition to additional C1 services</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-5 pt-0 row">
                <div className="pink col-1"></div>
                <div className="px-3 blurb-home col-5">
                    <p className="blurb-home pt-5">Our Value Proposition</p>
                    <p className="text-home">
                        We leverage Gen-Z:
                    </p>
                    <ul className="text-home">
                        <li>More “saving-savvy” than other generations</li>
                        <li>Better interest rates</li>
                        <li>Flexibility to invest small amounts</li>
                        <li>More likely to stay with Capital One</li> 
                    </ul>
                </div>
                <div className="px-3 col-6">
                    <div className="d-flex flex-column">
                        <p className="blurb-home pt-5" style={{color: "white"}}>placeholder</p>
                        <p className="text-home">
                            We bring banking to new communities:
                        </p>
                        <ul className="text-home">
                            <li>{"Provides micro-loans (< $1000) to support users on their journey to financial independence"}</li>
                            <li>Establishes trust and engagement with communities new to financial institutions</li>
                            <li>Benefits: Lower-interest loans, credit history, and accumulated savings</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
