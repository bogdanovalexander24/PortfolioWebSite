import React, { Fragment, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
// import 'materialize-css/dist/css/materialize.min.css';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const submit = e => {
    if (name && email && subject && phoneNumber && message) {
      M.toast({ html: 'Message sent' });
    } else {
      M.toast({ html: 'Please fill the fields' });
    }

    e.preventDefault();
  };

  return (
    <Fragment>
      <section id='contact-a' className='text-center py-3'>
        <div className='container'>
          <h2 className='section-tittle'>Contact Me</h2>
          <div className='bottom-line'></div>
          <p className='lead'>Here is how you can reach me</p>
          <form>
            <div className='text-fields'>
              <input
                type='text'
                className='text-input name-input'
                placeholder='Name'
                onChange={e => setName(e.target.value)}
              />
              <input
                type='text'
                className='text-input subject-input'
                placeholder='Subject'
                onChange={e => setSubject(e.target.value)}
              />
              <input
                type='email'
                className='text-input email-input'
                placeholder='Email Adress'
                onChange={e => setEmail(e.target.value)}
              />
              <input
                type='text'
                className='text-input phone-input'
                placeholder='Phone number'
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <textarea
                className='text-input message-input'
                placeholder='Enter Message'
                onChange={e => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button type='submit' className='btn-dark' onClick={submit}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
