import React, { useState } from 'react';
import "./contact.css";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Replace 'YOUR_FORMSUBMIT_ENDPOINT' with your actual FormSubmit endpoint
    // Example: https://formsubmit.co/your-email@example.com
    const formSubmitEndpoint = "https://formsubmit.co/bhushanlilhare1@gmail.com"; 

    try {
      // FormSubmit requires specific hidden fields and a POST request
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus('Failed to send message. Please try again or send an email directly.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('An error occurred. Please check the console for details.');
    }
  };

  return (
    <section className="contact container section" id="contact">
       <Fade direction="up" triggerOnce>
        <h2 className="section__title">Get In Touch</h2>

        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="contact__title">Let's talk about everything!</h3>
            <p className="contact__details">
              Don't like forms? Send me an email at **your-email@example.com** 👋
            </p>
            {status && <p className={`contact__status ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="contact__form-div">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__form-input" 
                  placeholder="Email address"
                  required
                />
              </div>
            </div>
            <div className="contact__form-div">
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="contact__form-input" 
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <textarea 
                  name="message" 
                  id="message" 
                  cols="30" 
                  rows="10" 
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__form-input" 
                  placeholder="Message"
                  required
                > </textarea>
              </div>

              <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </Fade>
    </section>
  )
}

export default Contact
