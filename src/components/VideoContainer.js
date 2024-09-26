import React, { useEffect, useState } from 'react'
import { youTubeAPI } from '../Utils/Constants'
import VideoCard ,{AdVideocard} from './videoCard' 
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const [Videos, setVideos] = useState ([

  ])

  useEffect(()=>{
      getVideos()
  },[])

  const getVideos= async () =>{
   const data= await fetch( youTubeAPI)
   const json = await data.json()
   console.log(json.items)
   setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
    {Videos[9]&&  <AdVideocard info={Videos[9]}/>}
      {Videos.map((Videos) =>
        ( <Link to={"/watch?v="+Videos.id}> <VideoCard key={Videos.id} info={Videos}/>
      </Link>))}    
    </div>
  )   
}

export default VideoContainer
