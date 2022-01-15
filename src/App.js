import React from 'react';
import {Footer, Blog, Possibility, Features, Header, WhatGPT3} from "./containers";
import {CTA, Brand, Navbar} from "./components";
import './App.css';

const App = () => (
    <div className={'App'}>
        <div className={'gradient__bg'}>
            <div className='gpt3__content'>
                <Navbar/>
                <Header/>
                <Brand/>
                <WhatGPT3/>
                <Features/>
                <Possibility/>
                <CTA/>
                <Blog/>
                <Footer/>
            </div>
        </div>
    </div>
)

export default App