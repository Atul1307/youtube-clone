import React from 'react';
import Button from './Button';

const ButtonList = () => {
  const buttons = [
    'All',
    'Gaming',
    'Movies',
    'Live',
    'Cricket',
    'Soccer',
    'Cooking',
    'Badminton',
  ];
  return (
    <div className='flex'>
      {buttons.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
