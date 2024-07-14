import React from 'react';

const VideoCard = ({ info }) => {
  const formatNumber = (num) => {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
  };

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img
        className='rounded-lg'
        alt='Video thumbnail'
        src={thumbnails.medium.url}
      />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{formatNumber(statistics.viewCount)} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
