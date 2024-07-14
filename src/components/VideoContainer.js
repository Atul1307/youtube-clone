import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(process.env.REACT_APP_YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v=' + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
