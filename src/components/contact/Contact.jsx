import React, {useState, useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const initialValues = { name: "", email: "", message:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });
    validate(e.target)
  }
  const cleanInputFields = () => {
    for (const value in formValues) {
      formValues[value]=""
    };
  }
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(Object.keys(formErrors).length === 0){
      emailjs.sendForm('service_yefplaq', 'template_ffvnd3b', form.current, 'VUqmoZDwN3VD9X7Bm')
    }
  };

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name){
      errors.name = "Username is required!";
    }
    if(!values.email){
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)){
      errors.email = "Not a valid email format!";
    }
    if(!values.message){
      errors.message = "Message is required!";
    }
    return errors;
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <h4>Messenger</h4>
              <h5>Contact me via Facebook</h5>
              <a href="https://m.me/katrin.webhelp">Send a message</a>
            </article>
            <article className='contact__option'>
              <h4>Linkedin</h4>
              <h5>Contact me via Linkedin</h5>
              <a href="https://www.linkedin.com/in/katrinporkul/">Send a message</a>
            </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          {Object.keys(formErrors).length === 0 && isSubmit ? 
          (<div classname="success"> 
              {cleanInputFields()}
              Email sent successfully!
            </div>): ""}
          <input type="text" name='name' placeholder='Your Full Name' value={formValues.name} onChange={handleChange} />
          <p className="error">{formErrors.name}</p>
          <input type="text" name='email' placeholder='Your Email' value={formValues.email} onChange={handleChange} />
          <p className="error">{formErrors.email}</p>
          <textarea name="message" rows="7" placeholder='Your Message' value={formValues.message} onChange={handleChange} ></textarea>
          <p className="error">{formErrors.message}</p>
          <button type='submit' className='btn btn-primary inline'>Send</button>
      </form>
      </div>
    </section>
  )
}


export default Contact

/*
import React, {useState, useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const initialValues = { name: "", email: "", message:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({ ...formValues, [name]: value });
    validate(e.target)
  }
  const cleanInputFields = () => {
    for (const value in formValues) {
      formValues[value]=""
    };
  }
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      emailjs.send('service_yefplaq', 'template_ffvnd3b', form.current, 'VUqmoZDwN3VD9X7Bm')
    }
  };

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name){
      errors.name = "Username is required!";
    }
    if(!values.email){
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)){
      errors.email = "Not a valid email format!";
    }
    if(!values.message){
      errors.message = "Message is required!";
    }
    return errors;
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <h4>Messenger</h4>
              <h5>Contact me via Facebook</h5>
              <a href="https://m.me/katrin.webhelp">Send a message</a>
            </article>
            <article className='contact__option'>
              <h4>Linkedin</h4>
              <h5>Contact me via Linkedin</h5>
              <a href="https://www.linkedin.com/in/katrinporkul/">Send a message</a>
            </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          {Object.keys(formErrors).length === 0 && isSubmit ? 
          (<div classname="success"> 
              {cleanInputFields()}
              Email sent successfully!
            </div>): ""}
          <input type="text" name='name' placeholder='Your Full Name' value={formValues.name} onChange={handleChange} />
          <p className="error">{formErrors.name}</p>
          <input type="text" name='email' placeholder='Your Email' value={formValues.email} onChange={handleChange} />
          <p className="error">{formErrors.email}</p>
          <textarea name="message" rows="7" placeholder='Your Message' value={formValues.message} onChange={handleChange} ></textarea>
          <p className="error">{formErrors.message}</p>
          <button type='submit' className='btn btn-primary inline'>Send </button>
      </form>
      </div>
    </section>
  )
}


 */