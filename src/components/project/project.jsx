import React, { Component, useState } from "react";
import AOS from "aos";
import ParticleBackground from "../ParticleBackground";
import "../../style/project.css";
import Footer from "../footer/footer";
import Quran from '../../assets/img/quran.png';
import Down from '../../assets/img/down1.png';
import Islamic from '../../assets/img/islam.png';
import Nportfolio from '../../assets/img/new port.png';
import rweather from '../../assets/img/weather.png';
import Mail from '../../assets/img/mail.png';
import Food from '../../assets/img/food1.png';
import Landing from '../../assets/img/landing page.png';
import Quiz from '../../assets/img/Quiz.png';
import Clinic from '../../assets/img/clinic.png';
import Qcode from '../../assets/img/QR code.png';
import Landing1 from '../../assets/img/2.png';
import X_O from '../../assets/img/x-o.png';
import Cleaning from '../../assets/img/cleaning.png';
import File from '../../assets/img/file.png';
import Portfolio from '../../assets/img/new.png';
import Store from '../../assets/img/1.png';
import Oportofolio from '../../assets/img/old portofolio.png';

class Project extends Component {

    componentDidMount() {
        AOS.init();
    }

    constructor(props) {
        super(props);
        this.state = {
          showImages: false, // تهيئة الحالة الافتراضية لعدم إظهار الصور
        };
    }

    handleShowImages = () => {
      this.setState({ showImages: true }); // تعيين الحالة لإظهار الصور
    };

    handleHideImages = () => {
      this.setState({ showImages: false }); // تعيين الحالة لإخفاء الصور
    };

render() {
    return (
        <div>
            <div className="project">
            {/* <ParticleBackground className="ParticleBackground" /> */}

                <div className="container mx-auto">
        
                    <div className="sentence-container">
                        <div className="side-line" data-aos="fade-right" data-aos-delay="100"></div>
                        <h2 data-aos="fade-left" data-aos-delay="100" style={{fontFamily: 'elmessiri-bold'}}><span className="h2">03.</span> Projects</h2>
                    </div>

                    <div className="row justify-content-center" id="project-card">
                        <div className="row justify-content-center js-scroll fade-btm scrolled">

                            <div className="project-title">
                                <div className="js-scroll fade-top scrolled">
                                    <h1 className="project-title1"> Past Project Experience</h1>
                                    <p className="project-title2">Explore how I consistently delivered maximum results in my previous projects. </p>
                                </div>    
                            </div>
        
                            {/* Qurank Card */}
                            <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up"id="card-project">
                                <div className="card-link">
                                    <h5 className="card-title">Qurank Kareem</h5>
                                    <div>
                                        <a className="link" target="blank" href="https://github.com/Mohamed20a/qurank-kareem"><i className="fa-brands fa-github" id="link"></i></a>
                                        <a className="link" target="blank" href="https://qurank-kareem.netlify.app/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                    </div>
                                </div>
                                <div className="item js-scroll fade-btm scrolled">
                                    <a href="https://qurank-kareem.netlify.app/" target="_blank" class="item-overlay">
                                        <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                    </a>
                                    <img src={Quran} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Programming Ongoing charity for all dead Muslims. The site is about the Noble Qur’an, interpretation of the Qur’an, hadiths, morning and evening remembrances, and praises.</p>
                                    
                                </div>
                            </div>
            
                            {/* Down Card */}
                            <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="100" id="card-project">
                                <div className="card-link">
                                    <h5 className="card-title">MAG Downloader</h5>
                                    <div>
                                        <a className="link" target="blank" href="https://github.com/Mohamed20a/Media-Downloader"><i className="fa-brands fa-github" id="link"></i></a>
                                        <a className="link" target="blank" href="https://mag-downloader.netlify.app"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                    </div>
                                </div>
                                <div className="item js-scroll fade-btm scrolled">
                                    <a href="https://mag-downloader.netlify.app" target="_blank" class="item-overlay">
                                        <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                    </a>
                                    <img src={Down} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Media Downloader A MAG downloader is a site that can download videos, audios, and images from the four popular platforms (Facebook, Youtube, Instagram, Twitter) of different quality.</p>
                                    
                                </div>
                            </div>
            
                            {/* Islamic Card */}
                            <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="200" id="card-project">
                                <div className="card-link">
                                    <h5 className="card-title">Islamic</h5>
                                    <div>
                                        <a className="link" target="blank" href="https://github.com/Mohamed20a/Islamic"><i className="fa-brands fa-github" id="link"></i></a>
                                        <a className="link" target="blank" href="https://el-islam.netlify.app"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                    </div>
                                </div>
                                <div className="item js-scroll fade-btm scrolled">
                                    <a href="https://el-islam.netlify.app" target="_blank" class="item-overlay">
                                        <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                    </a>
                                    <img src={Islamic} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">A project that contains a simple and easy approach to issues that a Muslim cannot ignore.</p>
                                    
                                </div>
                            </div>
    
                            {/* My Portfolio Card */}
                            <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="300" id="card-project">
                                <div className="card-link">
                                    <h5 className="card-title">My Portfolio</h5>
                                    <div>
                                        <a className="link" target="blank" href="https://github.com/Mohamed20a/New-Portfolio"><i className="fa-brands fa-github" id="link"></i></a>
                                        <a className="link" target="blank" href="https://mohammed-ahmed.netlify.app"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                    </div>
                                </div>
                                <div className="item js-scroll fade-btm scrolled">
                                    <a href="https://mohammed-ahmed.netlify.app" target="_blank" class="item-overlay">
                                        <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                    </a>
                                    <img src={Nportfolio} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">My personal website build with React.js.</p>
                                    
                                </div>
                            </div>
    
                            {/* Quran-mail Card */}
                            <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="400" id="card-project">
                                <div className="card-link">
                                    <h5 className="card-title">Quran Mail</h5>
                                    <div>
                                        <a className="link" target="blank" href="https://github.com/Mohamed20a/Quran-Mail"><i className="fa-brands fa-github" id="link"></i></a>
                                        <a className="link" target="blank" href="https://quran-mail.000webhostapp.com/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                    </div>
                                </div>
                                <div className="item js-scroll fade-btm scrolled">
                                    <a href="https://quran-mail.000webhostapp.com/" target="_blank" class="item-overlay">
                                        <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                    </a>
                                    <img src={Mail} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">The service of sending Quranic verses with their interpretation on a daily basis at 12 am, so that it is a distinct start to your day via e-mail.</p>
                                    
                                </div>
                            </div>
    
                            {/* React Restaurant Card */}
                            <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="500" id="card-project">
                                <div className="card-link">
                                    <h5 className="card-title">React Restaurant</h5>
                                    <div>
                                        <a className="link" target="blank" href="https://github.com/Mohamed20a/React-Restaurant-App"><i className="fa-brands fa-github" id="link"></i></a>
                                        <a className="link" target="blank" href="https://mohamed20a.github.io/React-Restaurant-App/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                    </div>
                                </div>
                                <div className="item js-scroll fade-btm scrolled">
                                    <a href="https://mohamed20a.github.io/React-Restaurant-App/" target="_blank" class="item-overlay">
                                        <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                    </a>
                                    <img src={Food} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">Responsive Ecommerce Restaurant.</p>
                                    
                                </div>
                            </div>
            
                        
            
                            <div id="images row" style={{ display: this.state.showImages ? "contents" : "none" }}>
                              {/* إضافة الصور هنا */}
                
                                {/* React Weather Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="300" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">React Weather</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/React-Weather-App"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://react-weather1.netlify.app"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://react-weather1.netlify.app" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                        </a>
                                        <img src={rweather} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">A simple React weather app that allows you to get current weather information, based on the city you enter.</p>
                                        
                                    </div>
                                </div>
                                
                                {/* Landing Page Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="6000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">Landing Page</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/Udacity-landing-page"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://mohamed20a.github.io/Udacity-landing-page/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://mohamed20a.github.io/Udacity-landing-page/" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                        </a>
                                        <img src={Landing} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">This is my first project, and I hope to be successful in using the tools that I learned to implement what is required of me in this project.</p>
                                        
                                    </div>
                                </div>
                    
                                {/* Today Quiz Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="7000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">Today Quiz</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/quiz"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://quiz-1.netlify.app"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://quiz-1.netlify.app" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                        </a>
                                        <img src={Quiz} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Programming Quiz 15 religious questions in ( Html, Css, Javascript )</p>
                                        
                                    </div>
                                </div>
            
                                {/* Dental Clinic Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="8000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">Dental Clinic</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/Dentel-Clinic"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://drranasal.netlify.app/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://drranasal.netlify.app/" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                        </a>
                                        <img src={Clinic} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Designing a website for a dental clinic that presents about the doctor and the most important services of the clinic and a way to communicate.</p>
                                        
                                    </div>
                                </div>
    
                                {/* Old Portofolio Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="8000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">Old Portofolio</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/My-Portfolio"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://portfolioo-1.netlify.app/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://portfolioo-1.netlify.app/" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                        </a>
                                        <img src={Oportofolio} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">My Old personal website .</p>
                                        
                                    </div>
                                </div>

                                {/* Qr Code Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="9000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">Qr Code</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/QR-code"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://qr-1-code.netlify.app/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://qr-1-code.netlify.app/" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                        </a>
                                        <img src={Qcode} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Programming a site to download any link to QR Code in ( Html, Css, Javascript ).</p>
                                        
                                    </div>
                                </div>
                
                                {/* Landing Page1 Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="10000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">Landing Page</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/Frontend2"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://sls-team2.netlify.app/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://sls-team2.netlify.app/" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo <i class="fa-solid fa-link"></i></p>
                                        </a>
                                        <img src={Landing1} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Landing page design compatible with all screens.</p>
                                        
                                    </div>
                                </div>
                    
                                {/* X-O Game Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="11000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">X-O Game</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/X-O-Game"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://x-o-game11.netlify.app/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://x-o-game11.netlify.app/" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo</p>
                                        </a>
                                        <img src={X_O} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Tic-tac is a paper-and-pencil game for two players with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.</p>
                                        
                                    </div>
                                </div>
    
                                {/* House Cleaning Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="12000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">House Cleaning</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/House-Cleaning"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://house-cleaniing.netlify.app/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://house-cleaniing.netlify.app/" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo</p>
                                        </a>
                                        <img src={Cleaning} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">A website for a cleaning company that provides cleaning and sterilization services.</p>
                                        
                                    </div>
                                </div>
    
                                {/* Text File Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="13000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">Text File</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/File-Text"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://text-file.netlify.app/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://text-file.netlify.app/" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo</p>
                                        </a>
                                        <img src={File} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Website design that converts any written text into a file ( text, html, js, pdf, Doc, zip file ).</p>
                                        
                                    </div>
                                </div>
    
                                {/* Portfolio Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="14000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">Portfolio</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/portfolio2"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/portfolio2"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://github.com/Mohamed20a/portfolio2" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo</p>
                                        </a>
                                        <img src={Portfolio} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">Android programmer's gallery .</p>
                                        
                                    </div>
                                </div>
    
                                {/* Store Card */}
                                <div className="card col-md-6 col-lg-4 mb-5 p-3" data-aos="fade-up" data-aos-delay="15000" id="card-project">
                                    <div className="card-link">
                                        <h5 className="card-title">Store</h5>
                                        <div>
                                            <a className="link" target="blank" href="https://github.com/Mohamed20a/Frontend1"><i className="fa-brands fa-github" id="link"></i></a>
                                            <a className="link" href="https://sls-team.netlify.app/"><i className="fa-solid fa-up-right-from-square" id="link"></i></a>
                                        </div>
                                    </div>
                                    <div className="item js-scroll fade-btm scrolled">
                                        <a href="https://sls-team.netlify.app/" target="_blank" class="item-overlay">
                                            <p className="demo">Live Demo</p>
                                        </a>
                                        <img src={Store} className="card-img-top" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">The interface of an online store, to display programming languages .</p>
                                        
                                    </div>
                                </div>
                
                            </div>
                        </div>    
                    </div>
        
                    <div style={{ display: this.state.showImages ? "none" : "block" }} className="btn btn-primary" id="show-button" onClick={this.handleShowImages}>
                        Show More &nbsp; <i class="fa-solid fa-eye"></i>
                    </div>
        
        
                    <div style={{ display: this.state.showImages ? "block" : "none" }} className="btn btn-danger" id="hide-button" onClick={this.handleHideImages}>
                        Show Less &nbsp; <i class="fa-solid fa-eye-slash"></i>
                    </div>
        
                </div>
            </div>
    
            <Footer />

        </div>    
    );
  }
}

export default Project;
