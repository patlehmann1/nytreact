import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <header className="container-fluid text-center p-4 text-white">
            <span className="header-text">New York Times Search</span>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="What's on your mind?" />
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>
                </div>
            </div>
        </header>
            );
        };
        
export default MainHeader;