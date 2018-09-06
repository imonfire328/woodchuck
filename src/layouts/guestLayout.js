import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom'

//components
import GuestNav from '../components/guestNav';
import About from '../components/about';
import Login from '../components/login';
import GuestLanding from '../components/landing';

const GuestLayout = () => {
    <BrowserRouter>
        <div>
            <GuestNav />
            <main>
                <Route path='/' exact component={GuestLanding} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />
            </main>                                  
            <footer />
        </div>
    </BrowserRouter>
}

export default GuestLayout;