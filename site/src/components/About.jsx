import React from 'react'
import rohan from '../assets/rohan.png'
import alice from '../assets/alice.jpg'
import swetha from '../assets/swetha.jpg'
import pratham from '../assets/pratham.png'
import linkedinLogo from '../assets/linkedin.png'
import githubLogo from '../assets/github.png'

function About() {
    return (
        <div className="p-5">
            <div>
                <p className="blurb-home">THE PROJECT</p>
                <p className="text-home">
                    This project was developed during the Capital One Software Engineering Summit (Aug 2021)
                    as part of the hack-a-thon. The theme of the hack-a-thon was to come up with an idea
                    that would help change banking for good.
                </p>
                <p className="text-home">
                    During a speed round of brainstorming, we identified the need for active inclusion of
                    communities without previous access or support from the financial industry. One of the
                    main barriers to account ownership is lack of enough money&nbsp;
                    <a href="https://globalfindex.worldbank.org/sites/globalfindex/files/chapters/2017%20Findex%20full%20report_chapter2.pdf">
                        (World Bank)
                    </a>. One such community that has lower access is young adults: Both young adults with money 
                    who don’t know about investing and young adults from lower-income backgrounds looking to 
                    gain financial power and literacy.
                </p>
                <p className="text-home fw-bold">
                    So, we set out to think about how might we create an intuitive and responsive tool
                    to enable young adults to start their financial journey.
                </p>
                <p className="text-home">
                    To learn more about our journey and our project,&nbsp;
                    <a href="https://docs.google.com/presentation/d/1JSWvdbqA5RRtGl-VsRqdRlh_Tn1rlQssIByETT8R0c0/edit?usp=sharing">
                    check out our presentation</a>.</p>
            </div>
            <hr className="my-5"/>
            <div>
                <p className="blurb-home pb-3">THE TEAM</p>
                <div className="container">
                    <div className="row text-about">
                        <div className="col-3" align="center">
                            <img src={rohan} className="headshot pb-3"/>
                            <p className="fw-bold">Rohan Uttamsingh</p>
                            <p className="mb-0">University of Maryland, College Park</p>
                            <p>Computer Science and Applied Mathematics</p>
                            <div className="d-flex flex-row justify-content-center">
                                <a href="https://www.linkedin.com/in/rohanuttamsingh/" className="pe-3">
                                    <img className="logo" src={linkedinLogo} alt="https://www.linkedin.com/in/rohanuttamsingh/" />
                                </a>
                                <a href="https://github.com/rohanuttamsingh">
                                    <img className="logo" src={githubLogo} alt="https://github.com/rohanuttamsingh" />
                                </a>
                            </div>
                            
                        </div>
                        <div className="col-3" align="center">
                            <img src={alice} className="headshot pb-3"/>
                            <p className="fw-bold">Alice Wang</p>
                            <p className="mb-0">New York University</p>
                            <p>Computer Science</p>
                            <div className="d-flex flex-row justify-content-center">
                                <a href="https://www.linkedin.com/in/alice-wang-5276111b5" className="pe-3">
                                    <img className="logo" src={linkedinLogo} alt="https://www.linkedin.com/in/alice-wang-5276111b5" />
                                </a>
                                <a href="https://github.com/alicewang65">
                                    <img className="logo" src={githubLogo} alt="https://github.com/alicewang65" />
                                </a>
                            </div>
                            
                        </div>
                        <div className="col-3" align="center">
                            <img src={swetha} className="headshot pb-3"/>
                            <p className="fw-bold">Swetha Sankar</p>
                            <p className="mb-0">University of Delaware</p>
                            <p>Computer Science, Cybersecurity Concentration</p>
                            <div className="d-flex flex-row justify-content-center">
                                <a href="https://www.linkedin.com/in/swethasankar0" className="pe-3">
                                    <img className="logo" src={linkedinLogo} alt="https://www.linkedin.com/in/swethasankar0" />
                                </a>
                                <a href="https://github.com/swetha-sankar">
                                    <img className="logo" src={githubLogo} alt="https://github.com/swetha-sankar" />
                                </a>
                            </div>
                            
                        </div>
                        <div className="col-3" align="center">
                            <img src={pratham} className="headshot pb-3"/>
                            <p className="fw-bold">Pratham Rawat</p>
                            <p className="mb-0">Cornell University</p>
                            <p>Computer Science</p>
                            <div className="d-flex flex-row justify-content-center">
                                <a href="https://www.linkedin.com/in/pratham-rawat-368511146/" className="pe-3">
                                    <img className="logo" src={linkedinLogo} alt="https://www.linkedin.com/in/pratham-rawat-368511146/" />
                                </a>
                                <a href="https://github.com/PrathamRawat">
                                    <img className="logo" src={githubLogo} alt="https://github.com/PrathamRawat" />
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About