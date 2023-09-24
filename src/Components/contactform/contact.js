import React, { useState } from 'react';
import "./contact.css"
import image from "../../images/footer.png"
const ContactForm = () => {
    const [Entry, setEntry] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEntry({
            ...Entry,
            [name]: value,
        });

        if (name === 'name' && !value.trim()) {
            setErrors({ ...errors, name: 'Name is required' });
        } else if (name === 'email' && !isValidEmail(value)) {
            setErrors({ ...errors, email: 'Invalid email' });
        } else {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const isValidEmail = (email) => {

        const emailvalidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailvalidate.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isFormValid = !errors.name && !errors.email && !errors.message;

        if (isFormValid) {
            console.log('Form data:', Entry);

            setEntry({ name: '', email: '', message: '' });
        } else {
            console.error('Form not submitted.');
        }
    };

    return (
        <div id='contact-form'>
        <div className='background-footer'>
            <img src={image} alt='backgroundimage'/>
        </div>
            <div className="form-data">
            <div className='newsletters'>
                <h3 id='newsletter'>Newsletter</h3>
                <h4 id='news'>Get News about articles and updates in your inbox</h4>
            </div>
            <div className='form-input'><form onSubmit={handleSubmit}>
                <div className="form-1">
                  
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='NAME'
                        value={Entry.name}
                        onChange={handleChange}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-1">
                    
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='EMAIL'
                        value={Entry.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-1">
                   
                    <textarea
                        id="message"
                        name="message"
                        value={Entry.message}
                        placeholder='MESSAGE'
                        onChange={handleChange}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit" class="submit-button">
    Send
</button>
            </form></div>
            
            
        </div>
        <div id='getintouch'>GET<br/>IN TOUCH</div>
        <div id='last-foot'>Copyright 2022 All Right Reserved By SG</div>
        </div>
        
    );
};
export default ContactForm;
