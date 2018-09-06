import React from 'react';

//components 
import QuickDescription from '../components/quickDescription';
import Registration from '../components/registration';


const Landing = () => {
    <div className="jumbotron bg-white">
        <div className="container">
            <div className="row">
                <QuickDescription />
                <Registration />
            </div>
        </div>
    </div>
};

export default Landing;