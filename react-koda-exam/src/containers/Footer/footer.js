import React from 'react';
import './footer.css';

const footer =() => (
    
    <div class="row footer-content">
        
            <p class="footer__copyright">
                &#169; Kodaweb. All Rights Reserved
            </p>
            <p class="footer__links">
                <a href="#" title="Terms & Conditions" class="footer-link">Terms & Conditions</a>&nbsp;&nbsp;
                <a href="#" title="Privacy" class="footer-link">Privacy</a>

            </p>
       
        <div class="footer__links align-el">
            <a href="https://www.kodaweb.co.nz/" title="Koda Web Development" class="footer-link">Site by Kodaweb</a>
        </div>
    </div>
);

export default footer;