import React from 'react';
import { Link } from 'react-router-dom';
import solution1 from '../images/solution1.svg';
import solution2 from '../images/solution2.svg';
import solution3 from '../images/solution3.svg';
import Button from './Button';
import NavBar from './NavBar';

function About() {
  return (
    <section className="about">
      <NavBar />
      <h2 className="about__title">So what can I do for you?</h2>
      <p className="about__subtitle">
        Here will be a text with a couple of inspiring notes! And maybe some quotes from important people.
      </p>
      <ul className="cards">
        <li className="card">
          <img className="card__pic" src={solution1} alt="developer with notebook" />
          <p className="card__title">HTML coding</p>
          <p className="card__subtitle">...for make perferct markup</p>
        </li>
        <li className="card">
          <img className="card__pic" src={solution2} alt="developer with notebook" />
          <p className="card__title">React & Redux</p>
          <p className="card__subtitle">...to simplify your apps</p>
        </li>
        <li className="card">
          <img className="card__pic" src={solution3} alt="developer with notebook" />
          <p className="card__title">Node js</p>
          <p className="card__subtitle">...for improve your data</p>
        </li>
      </ul>
      <Link to="/contact">
        <Button type={'button'}>Contact me</Button>
      </Link>
    </section>
  );
}

export default React.memo(About);
