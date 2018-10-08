import React from 'react';
import './MainHeader.css';

const MainHeader = props => {
    return (
        <header className="container-fluid text-center p-4 text-white">
            <div className="row wrap">
            <div className="col-xs-12 col-lg-12">
            <span className="header-text">New York Times Search</span>
            </div>
            </div>
        </header>
            );
        };
        
export default MainHeader;