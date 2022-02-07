import React from 'react';

function CardForBlog() {
  return (
    <div>
      <h2>Повседневная практика</h2>
      <div>
        <p>Программирование</p>
        <p>{new Date().getFullYear()}</p>
      </div>
      <p>
        Cillum minim nulla enim nisi tempor incididunt pariatur duis ullamco qui. Consequat eiusmod cupidatat qui non et
        in officia. Lorem anim commodo nulla tempor non.
      </p>
    </div>
  );
}

export default CardForBlog;
