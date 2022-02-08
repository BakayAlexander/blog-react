import React from 'react';

function CardForBlog(props) {
  console.log(props);
  return (
    <>
      <div className="blog-card">
        <h3 className="blog-card__title">{props.name}</h3>
        <div className="blog-card__theme-container">
          <p className="blog-card__theme-title">{props.race}</p>
          <p style={{ margin: '0' }}>&bull;</p>
          <p className="blog-card__date">{props.gender}</p>
        </div>
        <p className="blog-card__text">
          <span style={{ fontWeight: 'bold' }}>
            Here will be a lot of text about my opinion on different things. But now there is only a small place holder.
            And data get from API Lord of the Rings.
          </span>
          Velit et tempor anim veniam reprehenderit ut sint voluptate consequat Lorem est fugiat labore reprehenderit.
          Esse excepteur magna fugiat exercitation ullamco. Incididunt aliqua aliqua eiusmod sint consectetur et
          pariatur incididunt duis sit ea amet. Sit laboris consectetur eiusmod anim ut ipsum proident. Aliqua non duis
          cillum pariatur ipsum adipisicing officia id id deserunt ea mollit adipisicing cillum. Enim deserunt sunt nisi
          aliqua culpa ipsum do non ipsum est. Anim ex deserunt tempor id sunt enim exercitation. Ut id fugiat consequat
          exercitation labore. Consectetur ut culpa qui velit aliquip sit in ad mollit ad enim est mollit. Ipsum
          cupidatat enim qui tempor. Velit consectetur ex sit tempor eu occaecat non dolore eiusmod Lorem aliqua. Eu
          dolor pariatur pariatur officia veniam.
        </p>
        <a className="blog-card__link" href={props.wikiUrl} target={'_blank'} rel={'noreferrer'}>
          Read more &#8594;
        </a>
      </div>
    </>
  );
}

export default CardForBlog;
