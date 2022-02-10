import React from 'react';
import { Link } from 'react-router-dom';
import AboutCard from './AboutCard';
import Button from './Button';
import NavBar from './NavBar';
import { cards } from '../utils/data';

function About() {
  return (
    <section className="about">
      <NavBar />
      <h2 className="about__title">So what can I do for you?</h2>
      <p className="about__subtitle">
        Here will be a text with a couple of inspiring notes! And maybe some quotes from important people.
      </p>
      <ul className="cards">
        {cards.map((card, index) => (
          <AboutCard key={index} src={card.src} alt={card.alt} title={card.title} subtitle={card.subtitle} />
        ))}
      </ul>
      <Link to="/contact">
        <Button type={'button'}>Contact me</Button>
      </Link>
    </section>
  );
}

export default React.memo(About);
