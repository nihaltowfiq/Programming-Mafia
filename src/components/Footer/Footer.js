import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu">
                <div className="inside" style={{marginTop: '30px'}}>
                    <p>Millions of people of all ages and from around the fworld are improving their lives with us.Millions of people of all ages and from around the fworld are improving their lives with us.Millions of people of all ages and from around the fworld are improving their lives with us.</p>
                </div>
                <div className="inside lightColor">
                    <h3>Course</h3>
                    <p>Web Design</p>
                    <p>Web Development</p>
                    <p>App Development</p>        
                    <p>Artificial Intelligence</p>
                </div>
                <div className="inside lightColor">
                    <h3>Terms</h3>
                    <p>Web Design</p>
                    <p>Web Development</p>
                    <p>App Development</p>        
                    <p>Artificial Intelligence</p>
                </div>
            </div>

            <p className="footer-end"><small>all right reserved by ProgrammingMafia || developed by Nihal Towfiq</small></p>
        </div>
    );
};

export default Footer;