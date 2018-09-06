import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


const GuestNav = (links) => {
    return (
        <div>
            <header>
                <nav className="bg-secondary navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/' className="navbar-brand font-weight-bold logo">woodchuck</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse a" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/login' className="nav-link text-primary">login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link ">about</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/terms' className="nav-link">terms</Link>
                    </li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto" />
                </div>
                </nav>
            </header>
        </div>
    )
}

export default GuestNav;