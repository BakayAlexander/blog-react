import React from 'react';

function Typewriter(props) {
  return (
    <div className="typewriter-effect home__subtitle">
      <p className="text" id="typewriter-text">
        {props.children}
      </p>
    </div>
  );
}

export default Typewriter;
