import React from 'react';
import Typewriter from './Typewriter';

function Home() {
  return (
    <div className="home">
      <h1
        className="home__title
  "
      >
        Welcome
      </h1>
      {/* <p className="home__subtitle">That is a small test blog made by Alexander Bakay</p> */}
      <Typewriter>Test blog by Alexander Bakay</Typewriter>
    </div>
  );
}

export default Home;
