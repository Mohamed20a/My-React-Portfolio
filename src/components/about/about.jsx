import React, { useState, useEffect } from "react";
import AOS from "aos";
import '../../style/about.css';
import Footer from "../footer/footer";
import SQL from '../../assets/img/mysql.png';
import myImage from '../../assets/img/me1.jpg';
import ParticleBackground from "../ParticleBackground";



function About() {
    const [activeTab, setActiveTab] = useState('education');

    useEffect(() => {
        
        AOS.init(); 
    }, []);
    

        return(
            <div>
                <div className='about' id="about">
                {/* <ParticleBackground className="ParticleBackground" /> */}

                    {/* Title Section */}
                    <div className="container">
                        <div className="row justify-content-center aos-init aos-animate " >
                            <div className="col-lg-7" >
        
                                <div className="sentence-container " data-aos="fade-right" data-aos-delay="100">
                                    <div className="side-line"></div>
                                    <h2 className="js-scroll fade-right scrolled" style={{fontFamily: 'elmessiri-bold'}}><span className="h2">02.</span> About</h2>
                                </div>    
                                
                                <br/>
                                
                                <p className="about-title ">
                                    <p data-aos="fade-up" data-aos-delay="100">I'am Mohamed Ahmed Full Stack Web Developer and I have experience in the field of web development and design,
                                        More than a 2 year of experience in frontend and year of Backend.</p>

                                    <p data-aos="fade-up" data-aos-delay="300">I always look forward to confrontation, challenge and thinking outside the box I strive to create beautiful 
                                        and immersive web through carefully designed and user focused code instructions I am passionate and energetic 
                                        as I can develop my skills and gain more experience.</p>
                                </p>
                            </div>
          
                            <div className="col-lg-3 mx-auto fade-right scrolled" style={{textAlign: '-webkit-center'}}>
                                {/* <img className="img" src={myImage} alt="" /> */}
                                <div id="me"></div>
                            </div>

                        </div>
                    </div>   


                    {/* Resume Section */}
                    <section id="section-resume" >
                        <div className="container relative" >
                            <div className="row gh-5" id="d_center">
                                <div className=" wow fadeInUp animated">
                                    <div className="p-4 row" id="card-resume">

                                        <div className="section-buttons me-3 col-lg-3 col-md-6 mb-5 p-3 flex w-[370px] flex-row font-mono text-sm text-primary md:w-hidden md:flex-col md:overflow-auto">
                                            <button className={`show-button ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>Education</button>
                                            <button className={`show-button ${activeTab === 'experiences' ? 'active' : ''}`} onClick={() => setActiveTab('experiences')}>Experiences</button>
                                            <button className={`show-button ${activeTab === 'certification' ? 'active' : ''}`} onClick={() => setActiveTab('certification')}>Certification</button>
                                        </div>

                                        {/* <div className="row col-lg-7"> */}
                                            {activeTab === 'education' && (
                                            <div className="col-lg-7" id="resume-card" data-aos="fade-right" data-aos-delay="100">
                                                <h3 className="s_border">Education</h3>
                                                <ul className="d_timeline">
                                                    <li className="d_timeline-item">
                                                        <h4 className="d_timeline-title">2020 - Present</h4>
                                                        <p className="d_timeline-text">
                                                            <span className="d_title">Faculty of Computer Science</span><span className="d_company">Mansoura University</span>
                                                            <p className="about-title1">
                                                                <i id="comma" className="fa-solid fa-quote-left"></i> I enrolled in the Computer science program with the motivation that commercial jobs 
                                                                would be replaced by technology in the future, so I decided to pursue this field of study 
                                                                .<i id="comma" className="fa-solid fa-quote-right"></i>
                                                            </p>
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            )}
    
                                            
                                            {activeTab === 'experiences' && (
                                            <div className="col-lg-7" id="resume-card" data-aos="fade-right" data-aos-delay="100">
                                                <h3 className="s_border">Experiences</h3>
                                                <ul className="d_timeline">
                                                    <li className="d_timeline-item">
                                                        <h4 className="d_timeline-title">Aug 2021 - Present</h4>
                                                        <p className="d_timeline-text">
                                                            <span className="d_title">Full Stack Web Developer</span><span className="d_company">Freelancer</span>
                                                            <p className="about-title1">
                                                                <i id="comma" class="fa-solid fa-quote-left"></i> I embarked on a dynamic career as a Full Stack Developer, 
                                                                weaving a tapestry of expertise across frontend and backend domains. My portfolio reflects a medley of impactful projects, 
                                                                from crafting engaging user interfaces to architecting robust backend systems. A seasoned <span style={{color: 'rgb(131 219 255/1)'}}> Freelancer</span>, I've harnessed my skills 
                                                                to deliver comprehensive web solutions, leveraging a spectrum of modern technologies
                                                                .<i id="comma" className="fa-solid fa-quote-right"></i><br />
                                                            </p>
                                                            <p className="about-title1">I’m currently learning Laravel <i className="fa-brands fa-laravel "></i> </p>
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            )}
    
                                            {activeTab === 'certification' && (
                                            <div className="col-lg-7" id="resume-card" data-aos="fade-right" data-aos-delay="200">
                                                <h3 className="s_border">Certification</h3>
                                                <ul className="d_timeline">
                                                    <li className="d_timeline-item">
                                                        <p className="d_timeline-text">
                                                            {/* <span class="d_title">Faculty of Computer Science</span><span class="d_company">Mansoura University</span> */}
                                                            <p className="about-title1">
                                                                <ul>
                                                                    <li className="li"><a className="about-title2" target="blank" href="https://drive.google.com/file/d/149GFlTsMcF1So3-aAYVQiL4JOhLhbaNz/view?usp=sharing">Certificate Complete Html & css From (Mahara-tech) <i id="iconn" className="fa-regular fa-circle-right"></i></a></li> <br/>
                                                                    <li className="li"><a className="about-title2" target="blank" href="https://drive.google.com/file/d/1IsiSZ7A5bRoEBEMg1lCoq-JCF2Cu23Cj/view?usp=sharing">Certificate Complete Html & css & Bootstrap From (Eduonix) <i id="iconn"  className="fa-regular fa-circle-right"></i></a></li> <br/>
                                                                    <li className="li"><a className="about-title2" target="blank" href="https://drive.google.com/file/d/1CnMt2ROJTCZgLgU2d9pMH7wbgYLqAfGT/view?usp=sharing">Certificate Complete React JS From (Mahara-tech) <i id="iconn"  className="fa-regular fa-circle-right"></i></a></li> <br/>
                                                                    <li className="li"><a className="about-title2" target="blank" href="https://drive.google.com/file/d/1jNE__B7K5ALIhnw5LV_2qQmLUQ1FPU_f/view?usp=sharing">Challenger Frontend Developer from (FWD) <i id="iconn"  className="fa-regular fa-circle-right"></i></a></li> <br/>
                                                                    <li className="li"><a className="about-title2" target="blank" href="https://drive.google.com/file/d/1TSOidEjsrRkoyz-7nkZ6xi9ACdaoYv3S/view?usp=sharing">Professional Frontend Developer from (FWD) <i id="iconn"  className="fa-regular fa-circle-right"></i></a></li> <br/>
                                                                    <li className="li"><a className="about-title2" target="blank" href="https://drive.google.com/file/d/1bctXXlC0wIFLa9Zx9OTv94Bex-mIEfJR/view?usp=sharing">Certificate Complete Fron-End From (Udemy) <i id="iconn"  className="fa-regular fa-circle-right"></i></a></li> <br/>
                                                                    <li className="li"><a className="about-title2" target="blank" href="https://drive.google.com/file/d/14RRy-34-d5qsbmIo-1NdHZkPaa_D7lzX/view?usp=sharing">Certificate Complete PHP 8 From (Udemy) <i id="iconn"  className="fa-regular fa-circle-right"></i></a></li> <br/>
                                                                    <li className="li"><a className="about-title2" target="blank" href="https://drive.google.com/file/d/1RZ7ZyfJm9V9UoL53NCR14P2ys1oug026/view?usp=sharing">Certificate Complete  Database From (Mahara-tech) <i id="iconn"  className="fa-regular fa-circle-right"></i></a></li> <br/>
                                                                    <li className="li"><a className="about-title2" target="blank" href="https://drive.google.com/file/d/1TU-5WP6ww22KGX4fb0rjVpB0nr-r32QP/view?usp=sharing">Certificate Complete PHP & MYSQL From (Mahara-tech) <i id="iconn"  className="fa-regular fa-circle-right"></i></a></li> <br/>
                                                                </ul>
                                                            </p>
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            )}
                                        {/* </div>     */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 
                    
    
                    {/* Teck Section */}
                    <section className="py-20" >
                        <div className="container">
                            <div className="row justify-content-center"  >
        
                                <div className="sentence-container">
                                    <div className="side-line"  data-aos="fade-right" data-aos-delay="100"></div>
                                    <h2 data-aos="fade-up" data-aos-delay="100" style={{fontFamily: 'elmessiri-bold'}}>Tech stack</h2>
                                </div>
        
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3" data-aos="fade-up" data-aos-delay="100">
                                    <div className=" rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark w-12 h-12" id="cards">
                                            {/* <img class="d-block lazy" id="img" src="https://ulinnaja-aldi.vercel.app/_next/static/media/html.541ad563.svg" alt=""/> */}
                                            <i className="fa-brands fa-html5 d-block lazy" id="img" ></i>
                                            <span className="card-num" >Html</span>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3" data-aos="fade-up" data-aos-delay="200">
                                    <div className=" rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            {/* <img className="d-block lazy" id="img"  src="https://ulinnaja-aldi.vercel.app/_next/static/media/css.640d4798.svg" alt="" /> */}
                                            <i className="fa-brands fa-css3-alt d-block lazy" id="img"></i>
                                            <span className="card-num" >css</span>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3" data-aos="fade-up" data-aos-delay="300">
                                    <div className=" rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            {/* <img className="d-block lazy" id="img"  src="./logo/insta.png" alt=""/> */}
                                            <i className="fa-brands fa-js d-block lazy" id="img"></i>
                                            <span className="card-num" >Javascript</span>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3" data-aos="fade-up" data-aos-delay="400">
                                    <div className=" rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            {/* <img className="d-block lazy" id="img" src="./logo/twitter1.png" alt="" /> */}
                                            <i className="fa-brands fa-react d-block lazy" id="img"></i>
                                            <span className="card-num" >React JS</span>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3" data-aos="fade-up" data-aos-delay="500">
                                    <div className=" rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            <img className="d-block lazy fa-quinscape" id="img" src="https://img.icons8.com/ios-filled/30/0769ad/jquery.png" alt="" />
                                            {/* <i className="fa-brands fa-quinscape d-block lazy" id="img"></i> */}
                                            <span className="card-num" >jQuery</span>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3" data-aos="fade-up" data-aos-delay="600">
                                    <div className=" rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            {/* <img className="d-block lazy" id="img" src="./logo/twitter1.png" alt="" /> */}
                                            <i className="fa-brands fa-bootstrap d-block lazy" id="img"></i>
                                            <span className="card-num" >Bootstrap</span>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3" data-aos="fade-up" data-aos-delay="700">
                                    <div className=" rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            {/* <img className="d-block lazy" id="img" src="./logo/twitter1.png" alt="" /> */}
                                            <i className="fa-brands fa-php d-block lazy" id="img"></i>
                                            <span className="card-num" >PHP</span>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3" data-aos="fade-up" data-aos-delay="800">
                                    <div className=" rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            {/* <img className="d-block lazy" id="img" src="./logo/twitter1.png" alt="" /> */}
                                            <img className="d-block lazy" id="img" src={SQL} alt="My Image" />
                                            <span className="card-num" >MYSQl</span>
                                        </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                    </section>


                    {/* Tools Section */}
                    <section className="py-21">
                        <div className="container">
                            <div className="row justify-content-center" >
        
                                <div className="sentence-container">
                                    <div className="side-line" data-aos="fade-right" data-aos-delay="100"></div>
                                    <h2 data-aos="fade-up" data-aos-delay="100" style={{fontFamily: 'elmessiri-bold'}}>Tools used</h2>
                                </div>
        
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3 fade-btm scrolled" >
                                    <div data-aos="fade-up" data-aos-delay="100" className="rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark w-12 h-12" id="cards">
                                            <i className="fa-brands fa-git-alt d-block lazy" id="img"></i>
                                            <span className="card-num" >Git</span>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3 fade-btm scrolled">
                                    <div data-aos="fade-up" data-aos-delay="200" className="rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            <i className="fa-brands fa-github d-block lazy" id="img"></i>
                                            <span className="card-num" >Github</span>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3 fade-btm scrolled">
                                    <div data-aos="fade-up" data-aos-delay="300" className="rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            <i className="fa-brands fa-npm d-block lazy" id="img"></i>
                                            <span className="card-num" >NPM</span>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 col-xs-12 p-3 fade-btm scrolled">
                                    <div data-aos="fade-up" data-aos-delay="400" className="rounded py-4 text-center" id="card">
                                        <div className="text-decoration-none text-dark" id="cards">
                                            <img className="d-block lazy" id="img2" src="https://ulinnaja-aldi.vercel.app/_next/static/media/vscode.f018dc3d.svg" alt="" />
                                            <span className="card-num" >VScode</span>
                                        </div>
                                    </div>
                                </div>
                    
                            </div>
                        </div>
                    </section>        
                </div>

                <Footer />

            </div>
        );
    
}

export default About; 