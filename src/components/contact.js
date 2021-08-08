import * as React from 'react';
import * as style from './contact.module.css';

const Contact = () => {
  return (
    <div className={style.contactWrapper}>
        <h1 className={style.formHeading}>Contact Ashley</h1>
        <p className={style.formInfo}>Get in touch by filling out the form below.</p>
        <form className={style.contactForm} method="post" action="#">
          <input className={style.formInput} type="text" name="name" id="name" aria-label="name" placeholder="Full Name"/>
          <input className={style.formInput} type="email" name="email" id="email" aria-label="email" placeholder="Email Address" />
          <textarea className={style.formTextArea} name="message" id="message" aria-label="message" placeholder="How can I help?" />
          <button className={style.formSubmitBtn} type="submit">Send Message</button>
        </form>
    </div>
  );
};

export default Contact;