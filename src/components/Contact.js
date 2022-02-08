import React from 'react';
import Button from './Button';
import NavBar from './NavBar';

function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [tel, setTel] = React.useState('');

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeTel = (e) => {
    setTel(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hello ${name}! Thank you for your interest in my project. But this is only a test page, so your presonal data gone nowhere.`
    );
    setName('');
    setEmail('');
    setTel('');
  };

  return (
    <div className="contact">
      <div className="menu__container">
        <NavBar />
      </div>
      <div className="contact__container">
        <h2 className="contact__title">Live your contact information if you are interested to work with me.</h2>
        <p className="contact__subtitle">By pressing the send button you agree to processing your personal data.</p>
        <form className="contact__form" onSubmit={handlerSubmit}>
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
              autoComplete="off"
              value={name ?? ''}
              onChange={changeName}
            />
            <input
              className="contact__input"
              id="type_email"
              type="email"
              name="email"
              placeholder="Email"
              minLength="2"
              maxLength="30"
              autoComplete="off"
              value={email ?? ''}
              onChange={changeEmail}
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
              autoComplete="off"
              value={tel ?? ''}
              onChange={changeTel}
            />
          </fieldset>
          <Button type={'submit'}>Contact with me</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
