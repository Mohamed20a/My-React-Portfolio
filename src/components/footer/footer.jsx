import React from "react";
import '../../style/style.css';
import '../../fontawesome.min.css'

export default function Footer() {
    return (
        // <div className="w-full py-5 text-center font-mono text-[10px] md:text-sm" style={{color: '#9ca3af'}}>
        //     Build by Mohamed Ahmed. All right reserved.
        // </div>

        <footer>
            <div className="container">
                <div className="social-icons">
                    <a className="social-icon "  id="face" href="https://www.facebook.com/profile.php?id=100006434713527" target="_blank"><i className="fab fa-fw fa-facebook-f"></i></a>
                    <a className="social-icon " id="insta" href="https://www.instagram.com/m_ahmeeeed/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a className="social-icon " id="linked" href="https://www.linkedin.com/in/mohamed-ahmed-elgeady-bb358b239/" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                    <a className="social-icon " id="github" href="https://github.com/Mohamed20a" target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>    
        </footer>
    );
}