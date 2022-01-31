import React from 'react'
import Navbar from './components/Navbar'

import Technology from './components/Technology';
import Sports from './components/Sports';
import Clothing from './components/Clothing';
import Grocery from './components/Grocery';
import Electronics from './components/Electronics';
import Furniture from './components/Furniture';

import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Left from './components/Left';
import Right from './components/Right';

import {
    BrowserRouter as Router,
    Switch,
    Route

} from "react-router-dom";

export default function MyApp1() {
    return (
        <>
            <Router>
                <Header />
                <Navbar />
                <Left />
                <Right />
                <Switch>
                    <Route path="/technology">
                        <Technology />
                    </Route>
                    <Route path="/sports">
                        <Sports />
                    </Route>
                    <Route path="/clothing">
                        <Clothing />
                    </Route>
                    <Route path="/grocery">
                        <Grocery />
                    </Route>
                    <Route path="/electronics">
                        <Electronics />
                    </Route>
                    <Route path="/furniture">
                        <Furniture />
                    </Route>
                     <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />

            </Router>
        </>
    )
}
