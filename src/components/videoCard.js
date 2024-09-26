import React from 'react';

const VideoCard = ({ info = {} }) => {
   
  const { snippet = {}, statistics = {} } = info;
  const { channelTitle = 'Unknown Channel', title = 'No Title', thumbnails = { high: { url: '' } } } = snippet;

  const thumbnailUrl = thumbnails.high.url || '';

  return (
    <div className='p-1 m-2 w-[220px]'>
      {thumbnailUrl && <img className='rounded-lg' alt='thumbnail' src={thumbnailUrl} />}
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount || 0} Views</li>
      </ul>
    </div>
  );
}

export const AdVideocard =({info})=>{
  return (
    <div className='border border-red-900'>
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
