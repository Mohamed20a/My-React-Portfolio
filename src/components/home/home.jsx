import React, {Component} from "react";
import AOS from "aos";
import Footer from "../footer/footer";
import '../../style/style.css';
import '../../fontawesome.min.css';
import ParticleBackground from "../ParticleBackground";
import WordFlick from "./WordFlick";

// import ParticlesAnimation from '../ParticlesAnimation';

class Home extends Component {
    componentDidMount() {
        AOS.init();
    }
    render() { 
        return(
            <div>
                <div className='home'>
                    {/* <ParticlesAnimation /> */}
                    <ParticleBackground className="ParticleBackground" />

                    <div className="container" id="home">
                        <p className="p"> Hi, my name is</p>
                        <h1 className="name js-scroll fade-left scrolled"> Mohamed Ahmed</h1>
                        {/* <h1 className="title">I build things for the web.</h1> */}
                        {/* <h2 className="word">Full Stack Web Developer</h2> */}
                        <h2 className=" font-bold text-2xl dark:text-slate-50 " style={{color: 'rgb(131 219 255/1)'}}>
                            <WordFlick />
                            <span>|</span>{" "}
                        </h2>
                        <a href="https://drive.google.com/file/d/1EQv-moVxO0XbHNfMLKK3b1u27brKzQz0/view" target="blank">
                            <button className="button">
                                View My CV Here!
                            </button>
                        </a>
                        <div id="icons">
                            <div className="container">
                                <a className="social-icon11 js-scroll fade-left scrolled" id="face" href="https://www.facebook.com/profile.php?id=100006434713527" target="_blank"><i className="fab fa-fw fa-facebook-f" aria-hidden="true" id="icon-i"></i></a>
                                <a className="social-icon11 js-scroll fade-left scrolled" id="insta" href="https://www.instagram.com/m_ahmeeeed/" target="_blank"><i className="fa-brands fa-instagram" aria-hidden="true" id="icon-i"></i></a>
                                <a className="social-icon11 js-scroll fade-left scrolled" id="linked" href="https://www.linkedin.com/in/mohamed-ahmed-elgeady-bb358b239/" target="_blank"><i className="fab fa-fw fa-linkedin-in" aria-hidden="true" id="icon-i"></i></a>
                                <a className="social-icon11 js-scroll fade-left scrolled" id="github" href="https://github.com/Mohamed20a" target="_blank"><i className="fa-brands fa-github" aria-hidden="true" id="icon-i"></i></a>
                                <a className="social-icon11 js-scroll fade-left scrolled" id="gmail" href="mailto:m16ahmed17@gmail.com" target="_blank"><i className="fa-solid fa-envelope" aria-hidden="true" id="icon-i"></i></a>
                            </div>
                        </div>    
                    </div>

                    
                    {/* <Footer /> */}
                    <div className="w-full py-5 text-center font-mono text-[10px] md:text-sm" id="footer-home" style={{color: '#9ca3af'}}>
                        Build by Mohamed Ahmed ♡
                    </div>
                </div>
            </div>    
        );
    }
}

export default Home; 
