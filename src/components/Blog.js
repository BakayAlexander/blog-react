import React from 'react';
import CardForBlog from './CardForBlog';
import api from '../utils/api';

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
      {quotes.map(({ _id, ...props }) => (
        <CardForBlog key={_id} {...props} />
      ))}
    </div>
  );
}

export default Blog;
