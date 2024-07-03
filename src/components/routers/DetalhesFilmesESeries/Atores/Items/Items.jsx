import React from 'react';
import { Link } from 'react-router-dom';
import imgUserInvalid from '../../../../../imgs/userProfile/userInvalid.jpg'

const Items = ({ dado }) => {
  return (
    <Link to={`/person/${dado.id}`}>
      <div
        style={{
          backgroundImage: dado.profile_path
            ? `url(https://image.tmdb.org/t/p/original/${dado.profile_path})`
            : `url(${imgUserInvalid}`,
        }}
      ></div>
      <div>
        <p>{dado.name}</p>
        <span>{dado.character || dado.job}</span>
      </div>
    </Link>
  );
};

export default Items;
