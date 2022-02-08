import React from 'react';

function ContactButton(props) {
  return (
    <button className="contact-button" type={props.type}>
      {props.children}
    </button>
  );
}

export default ContactButton;
