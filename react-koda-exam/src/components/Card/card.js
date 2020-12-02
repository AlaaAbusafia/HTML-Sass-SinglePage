import React from 'react';
import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import CardPhoto from '../CardPhoto/cardPhoto';



import './card.css';

const card = (props) => (
    <div className="card">
        <CardPhoto />
        <div className="name-social">
            <h4 className="card__name heading-tertiary">Mike Smith</h4>
            <ul className="social">
                <li><a className="social__i" href="#" target="_blank" aria-label="Facebook">
                    <FaFacebook size={10} />
</a></li>
                <li><a className="social__i" href="#" target="_blank" aria-label="Twitter">
                        <FaTwitter size={10} /></a></li>
                <li><a className="social__i" href="#" target="_blank" aria-label="Mail">
                        <FaEnvelope size={10}  /></a></li>
            </ul>
        </div>
    
        <span className="card__work">Partner</span>
        <p className="card__about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus doloremque natus
            quidem</p>
        <a href="#" className="more-link"><i className="fa fa-fw fa-chevron-right" aria-hidden="true"></i> read more</a>
    </div>
);

export default card;
