import React from 'react';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';
import { nanoid } from '@reduxjs/toolkit';

const NoticesCategoriesList = () => {
  const petSchemaArr = [
    //will takes alredy filtred itemList from global state
    {
      name: 'Pes Duke',
      dateOfBirth: new Date().toString(),
      breed: 'ovcharcka',
      imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAsb2yN-2vq3tMluxG4gYSA03oqBPBqBUS9Bh7cTWZA&s',
      comments: 'sdasdaddaadadad',
      owner: {
        ref: 'user',
        required: true,
      },
    },
    {
      name: 'Pes Duke',
      dateOfBirth: new Date().toString(),
      breed: 'ovcharcka',
      imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAsb2yN-2vq3tMluxG4gYSA03oqBPBqBUS9Bh7cTWZA&s',
      comments: 'sdasdaddaadadad',
      owner: {
        ref: 'user',
        required: true,
      },
    },
    {
      name: 'Pes Duke',
      dateOfBirth: new Date().toString(),
      breed: 'ovcharcka',
      imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAsb2yN-2vq3tMluxG4gYSA03oqBPBqBUS9Bh7cTWZA&s',
      comments: 'sdasdaddaadadad',
      owner: {
        ref: 'user',
        required: true,
      },
    },
    {
      name: 'Pes Duke',
      dateOfBirth: new Date().toString(),
      breed: 'ovcharcka',
      imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAsb2yN-2vq3tMluxG4gYSA03oqBPBqBUS9Bh7cTWZA&s',
      comments: 'sdasdaddaadadad',
      owner: {
        ref: 'user',
        required: true,
      },
    },
    {
      name: 'Pes Duke',
      dateOfBirth: new Date().toString(),
      breed: 'ovcharcka',
      imgURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAsb2yN-2vq3tMluxG4gYSA03oqBPBqBUS9Bh7cTWZA&s',
      comments: 'sdasdaddaadadad',
      owner: {
        ref: 'user',
        required: true,
      },
    },
  ];

  return (
    <>
      {petSchemaArr.map(item => {
        const { name, dateOfBirth, breed, imgURL, comments } = item;

        return (
          <NoticeCategoryItem
            key={nanoid()}
            petInfo={{name, dateOfBirth, breed, imgURL, comments}}
          />
        );
      })}
    </>
  );
};

export default NoticesCategoriesList;
