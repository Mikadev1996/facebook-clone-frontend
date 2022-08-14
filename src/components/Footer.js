import React from "react";
import '../styles/Footer..scss'

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <div> English (UK) </div>
                <div>
                    <ul className='pageFooterLinkList'>
                        <li>Sign Up</li>
                        <li>Log In</li>
                        <li>Mika's GitHub</li>
                    </ul>
                </div>
                <div>
                    <p>Mika © 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;