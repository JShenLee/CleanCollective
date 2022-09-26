import React from 'react';
import logo from '../shared/images/CCLogo.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LandingPage = () => {
    return(
        <div className='landingPage'>
            <div className='bannerArea'>
                <img className='bigLogo' src={logo}/>
                <h3>Join Clean Collective</h3>
                <p>Get more features and privileges by joining the most helpful community</p>
            </div>
            <div className='landingPageButtons'>
                <p>Explore features of our knowledge and matching software</p>
                
                <Link to={"/forum"} className="nav-link">
                    <button type='submit' className='landingButton landingFont'>Questions & Answers</button>
                </Link>
                <Link to={"/FAQ"} className="nav-link">
                    <button type='submit' className='landingButton landingFont'>FAQs</button>
                </Link>
                <Link to={"/register"} className="nav-link">
                    <button type='submit' className='landingButton landingFont'>Meet The Team</button>
                </Link> 
            </div>
            <div className='bigBlock'>
                <div className='adoptor'>
                    <h3>Adoptor</h3>
                    <p>lorem asdfas dfasdf asdf;kjlhas dfjhaskld fhlaksjdhf lkjasdhflkjas dfhlk asdh flkasjdhf lkj</p>
                </div> 
                <div className='innovator'>
                    <h3>Innovator</h3>
                    <p>lorema sdfj;akls dfj;lkasd fj;lsakd jf;aslkdjf ;alskdjf ;lasd kfj;laskd jf;lasdjf lasdkfj a;lsdkfj;</p>
                </div>  
                <Link to={"/register"} className="nav-link getStarted">
                    <button className='buttonGreen'>Get Started</button>
                </Link>
            </div>
            <div className='twoBoxes'>
                <div className='box1'>

                </div>
                <div className='box2'>
                    
                </div>
            </div>
        </div>
    );
};

export default LandingPage;