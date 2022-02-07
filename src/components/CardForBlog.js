import React from 'react';

function CardForBlog(props) {
  console.log(props);
  return (
    <div className="blog-card">
      <h2 className="blog-card__title">Повседневная практика</h2>
      <div className="blog-card__theme-container">
        <p className="blog-card__theme-title">Программирование</p>
        <p style={{ margin: '0' }}>&bull;</p>
        <p className="blog-card__date">{new Date().getFullYear()}</p>
      </div>
      <p className="blog-card__text">{props.chapterName}</p>
    </div>
  );
}

export default CardForBlog;
