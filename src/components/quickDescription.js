import React from 'react';
import {Link} from 'react-router-dom';

const QuickDescription = () => {
    return(
        <div className="col-lg">
            <div className="card">
                <div className="card-body p-5">
                <h1 className="mb-4">Finding wood chips and logs a home.</h1>
                <h6 className="card-subtitle mb-2 text-muted" />
                <p className="card-text">
                    Woodchuck is a service connecting home owners who want
                    free wood and/or chips with arborists looking for
                    accessable drop sites.
                </p>
                <Link to='/about' className="card-link">learn more</Link>
                </div>
            </div>
        </div>
    )
}

export default QuickDescription;