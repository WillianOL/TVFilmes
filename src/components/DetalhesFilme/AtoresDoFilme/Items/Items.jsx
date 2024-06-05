import React from 'react';
import { Link } from 'react-router-dom'

const Items = ({ dado }) => {
  return (
    <Link to={`/person/${dado.id}`}>
      <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${dado.profile_path})`}}></div>
      <div>
        <p>{dado.name}</p>
        <span>{dado.character}</span>
      </div>
    </Link>
  );
};

export default Items;
