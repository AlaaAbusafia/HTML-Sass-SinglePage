import React from 'react';

import './logo.css';
import kodaLogo from './../../_assets/logo.png';

const logo = (props) => (
    <div className="koda-logo">
        <a href="https://www.kodaweb.co.nz/"><img src={kodaLogo} alt="Kod Web Logo"/></a>
    </div>
);

export default logo;