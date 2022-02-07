import React from 'react';

function Typewriter(props) {
  return (
    <p className="typewriter-effect home__subtitle">
      <div className="text" id="typewriter-text">
        {props.children}
      </div>
    </p>
  );
}

export default Typewriter;
