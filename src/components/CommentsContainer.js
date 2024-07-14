import React from 'react';
import Comments from './Comments';
import CommentsList from './CommentsList';

const CommentsContainer = () => {
  const commentsData = [
    {
      name: 'Atul',
      text: 'yama dama ding dong ring rong ...',
      replies: [
        {
          name: 'Thegame',
          text: 'ding ding ring ring ...',
          replies: [
            {
              name: 'Thegame',
              text: 'ding ding ring ring ...',
              replies: [],
            },
          ],
        },
        {
          name: 'Thegame',
          text: 'ding ding ring ring ...',
        },
      ],
    },
    {
      name: 'Deadman',
      text: 'What are we watching today',
      replies: [
        {
          name: 'Mysterio',
          text: 'boooo...',
        },
      ],
    },
  ];

  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments..</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
