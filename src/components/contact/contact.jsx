import React, { useState, useEffect } from "react";
import "../../style/contact.css";
import Footer from "../footer/footer";
import { validateForm } from './count';
import ParticleBackground from "../ParticleBackground";



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const [isSent, setIsSent] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {   
      await sendEmail();
      setIsSent(true);  
      setShowConfirmation(true);

      setTimeout(() => {
        setShowConfirmation(false); 
      }, 3000);

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('حدث خطأ أثناء إرسال النموذج:', error);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const formSpreeEndpoint = 'https://formspree.io/f/xvojzyrj';

  const sendEmail = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        console.log('Done!');
      } else {
        console.error('Error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    validateForm();
  }, []);

  return (
    <div>
      <div className="contact">

        <div className="container mx-auto">
            <div className="sentence-container">
              <div className="side-line" data-aos="fade-right" ></div>
              <h2 data-aos="fade-left" style={{fontFamily: 'elmessiri-bold'}}><span className="h2">04.</span>  Contact US</h2>
            </div>
          <div className="row justify-content-center" id="project-card">
            <div className="form-container">
            <div className="confirmation-message" style={{ display: showConfirmation ? 'block' : 'none' }}>
                Registration Successful ✔ 
            </div>
              <div className="form">
                <span className="heading">Get in touch</span>
                <form onSubmit={handleSubmit}>
                  <input placeholder="Name" type="text" className="input" value={name} onChange={handleNameChange} required />
                  <input placeholder="Email" type="email" className="input" value={email} onChange={handleEmailChange} required />
                  <textarea placeholder="Say Hello" rows="10" cols="30" maxlength="350" id="message" name="message" className="textarea" value={message} onChange={handleMessageChange} required />
                  <p id="charCount"></p>
                  <div className="button-container">
                    <button type="submit" className="send-button" onClick={handleSubmit}>
                      Send
                    </button>
                    <div className="reset-button-container">
                      <div type="button" id="reset-btn" className="reset-button" onClick={handleReset}>
                        Reset
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      <Footer />
      </div>
    </div>    
  );
};

export default Contact;