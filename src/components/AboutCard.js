import React from 'react';

function AboutCard({ src, alt, title, subtitle }) {
  return (
    <li className="card">
      <img className="card__pic" src={src} alt={alt} />
      <p className="card__title">{title}</p>
      <p className="card__subtitle">{subtitle}</p>
    </li>
  );
}

export default AboutCard;
