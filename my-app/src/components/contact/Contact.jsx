import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_w1h7j0h',
        'template_j8ag6b9',
        formRef.current,
        '_qxsNxwJUxkTzTRCA'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <div className="contact__container-grid">
        <div className="contact__info">
        <h3 className="contact__title">You can write a mail as well !</h3>
            <p className="contact__details"><a href="mailto:kasi.gajavalli@gmail.com">Send a message</a></p>
        </div>
        <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input type="text" className="contact__form-input" placeholder="Your Full Name" name="user_name" required />
            </div>
            <div className="contact__form-div">
              <input type="email" className="contact__form-input" placeholder="Your Email" name="user_email" required />
            </div>
          </div>
          <div className="contact__form-div">
            <input type="text" className="contact__form-input" placeholder="Subject" name="subject" required />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea className="contact__form-input" placeholder="Your message" cols="30" rows="10" name="message" required> </textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;