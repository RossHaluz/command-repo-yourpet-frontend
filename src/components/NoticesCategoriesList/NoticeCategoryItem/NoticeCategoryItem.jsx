import React from 'react';
import PropTypes from 'prop-types';

const NoticeCategoryItem = ({ petInfo }) => {
  const { name, dateOfBirth, breed, imgURL, comments } = petInfo;

  console.log('petInfo', petInfo);

  const isAuthorized = true; // will be received from global Redux obj

  return (
    <>
      <ul>
        <li>{name}</li>
        <li>{dateOfBirth}</li>
        <li>{breed}</li>
        <li>
          {imgURL}
          <img src={imgURL} alt="img" />
        </li>
        <li>{comments}</li>
      </ul>
    </>
  );
};

NoticeCategoryItem.propTypes = {
  petInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    comments: PropTypes.string,
  }).isRequired,
};
export default NoticeCategoryItem;
