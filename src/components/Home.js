import React from 'react';
import NavBar from './NavBar';
import TypeWriter from './TypeWriter';

function Home() {
  return (
    <div className="home">
      <NavBar />
      <h1
        className="home__title
  "
      >
        Welcome
      </h1>
      <TypeWriter>Test blog by Alexander Bakay</TypeWriter>
    </div>
  );
}

export default React.memo(Home);
