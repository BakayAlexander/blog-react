import React from 'react';

function Button(props) {
  return (
    <button className="contact-button" type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
