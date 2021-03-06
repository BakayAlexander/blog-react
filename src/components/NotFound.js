import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__title">Sorry, but this page doesn't exist.</p>
      <Link to="/">
        <Button>Go home</Button>
      </Link>
    </div>
  );
}

export default React.memo(NotFound);
