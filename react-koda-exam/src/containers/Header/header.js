import React from 'react';
import Toolbar from './../../components/Toolbar/Toolbar';

import './header.css';

const header = (props) => (
    
    <header className="header">
        <Toolbar />
 
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                <span className="heading-primary--sub">Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui</span>
            </h1>
    
            <a href="#about" className="btn btn--blue">Find Out More</a>
        </div>
    </header>
);

export default header;
