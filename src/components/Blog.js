import React from 'react';
import CardForBlog from './CardForBlog';
import api from '../utils/api';
import NavBar from './NavBar';

function Blog() {
  const [quotes, setQuotes] = React.useState([]);
  React.useEffect(() => {
    api
      .getLordOfTheRingsQoute()
      .then((data) => {
        setQuotes(data.docs);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="blog">
      <div className="menu__container">
        <NavBar />
      </div>
      {quotes.map(({ _id, ...props }) => (
        <CardForBlog key={_id} {...props} />
      ))}
    </div>
  );
}

export default React.memo(Blog);
