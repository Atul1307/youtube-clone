import React from 'react';

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img
        className='w-8 h-8'
        alt='user-icon'
        src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
      />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
