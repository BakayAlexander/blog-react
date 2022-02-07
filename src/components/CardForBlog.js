import React from 'react';

function CardForBlog() {
  return (
    <div className="blog-card">
      <h2 className="blog-card__title">Повседневная практика</h2>
      <div className="blog-card__theme-container">
        <p className="blog-card__theme-title">Программирование</p>
        <p style={{ margin: '0' }}>&bull;</p>
        <p className="blog-card__date">{new Date().getFullYear()}</p>
      </div>
      <p className="blog-card__text">
        Cillum minim nulla enim nisi tempor incididunt pariatur duis ullamco qui. Consequat eiusmod cupidatat qui non et
        in officia. Lorem anim commodo nulla tempor non.
      </p>
    </div>
  );
}

export default CardForBlog;
