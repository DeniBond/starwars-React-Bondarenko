import React from 'react';
import style from './footer.module.css';

const Footer = () => {
    return (
        <footer className="sticky-bottom">
            <div className={'st'}>
                <p className="border border-light rounded-pill btn btn-danger button-send-me-an-email" >Send me an <span className={style.email}>email</span></p>
            </div>
        </footer>
    );
};

export default Footer;