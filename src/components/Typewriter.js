import React from 'react';

function TypeWriter(props) {
  return (
    <div className="typewriter-effect home__subtitle">
      <p className="text" id="typewriter-text">
        {props.children}
      </p>
    </div>
  );
}

export default React.memo(TypeWriter);
