import React from 'react';
import ContactButton from './ContactButton';

function Conact() {
  return (
    <div className="contact">
      <h2 className="contact__title">Live your contact information if you are interested to work with me.</h2>
      <p className="contact__subtitle">By pressing he send button you agree to processing your personal data.</p>
      <form className="contact__form">
        <fieldset className="contact__inputs-container">
          <input
            className="contact__input"
            id="type_name"
            type="text"
            name="name"
            placeholder="Name
            &#42;"
            required
            minLength="2"
            maxLength="30"
            // autoComplete="off"
            // value={name ?? ''}
            // onChange={}
          />
          <input
            className="contact__input"
            id="type_email"
            type="email"
            name="email"
            placeholder="Email"
            // required
            minLength="2"
            maxLength="30"
            // autoComplete="off"
            // value={name ?? ''}
            // onChange={}
          />
          <input
            className="contact__input"
            id="type_tel"
            type="tel"
            name="tel"
            placeholder="Phone
            &#42;"
            required
            minLength="2"
            maxLength="30"
            // autoComplete="off"
            // value={name ?? ''}
            // onChange={}
          />
        </fieldset>
        <ContactButton>Contact with me</ContactButton>
      </form>
    </div>
  );
}

export default Conact;
