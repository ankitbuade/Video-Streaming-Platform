import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../Utils/Constants'
import { cacheResults } from '../Utils/searchSlice'

const Header = () => {
    const [searchQuery,SetSearchQuery]=useState("")
    const [suggestions ,setSuggestions] = useState ([])
    const [showSuggestion,setShowSuggestion]=useState(false)
    const searchCache = useSelector((store)=>store.search)
  

    useEffect(()=>{
              
     const timer = setTimeout(()=>{
      if(searchCache[searchQuery])
        {
          setSuggestions(searchCache[searchQuery])
         }
        else{
          getSearchSuggetions()
        }
      }
      ,200)
     return ()=>{
       clearTimeout(timer)
     }
     },[searchQuery])

     const getSearchSuggetions = async () => {
        if (!searchQuery) {
            setSuggestions([]);
            return;
        }
        const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await response.json();
        setSuggestions(json[1] || []);

        dispatch(
          cacheResults({
          [searchQuery]:json[1]
        }))
    };
 
     const dispatch = useDispatch()


     const toggleMenuHandler = ()=>
       dispatch(toggleMenu())
     
   return (
     <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
     <div className='flex col-span-1 cursor-pointer '>
       <img className='h-8'onClick={()=>toggleMenuHandler()}
         alt='menubar'
         src="https://cdn-icons-png.flaticon.com/128/9663/9663120.png"
       />
       <a href='/'> 
       <img className='h-8 mx-2'  
         
         alt='yt-logo'
         src='https://w7.pngwing.com/pngs/362/340/png-transparent-youtube-logo-streaming-media-youtube-logo-television-text-trademark-thumbnail.png'
       />
       </a>
 </div>
 <div className='col-span-10 px-10'>
       <div className=''>
         <input className='border border-gray-400 rounded-l-full w-1/2  px-5'
           type='text'
           value={searchQuery}
           onChange={(e)=>{
            
            SetSearchQuery(e.target.value);
            console.log("Search Query:", e.target.value); SetSearchQuery(e.target.value)}}
           onFocus={()=> setShowSuggestion(true)}
           onBlur={()=>setShowSuggestion(false)}

         />
           <button className='border border-gray-400 w-16 rounded-r-full px-5 bg-gray-200'> 🔍</button>
        </div>
        {showSuggestion &&
        <div className='absolute bg-white py-2 px-5 w-[429px] border border-gray-600 rounded-lg'>
        <ul>
            {suggestions.map((s)=>(<li key={s} className='hover:bg-gray-100 cursor-pointer'>🔍{s}</li>
)
            )}
        </ul>
       </div>
}
       </div>
       <div className='col-span-1 '>
         <img className='w-7'
           alt='userIcon'
           src='https://cdn-icons-png.flaticon.com/128/1144/1144760.png'
         />
       </div>
 
     </div>
   
   )
 }
 

export default Header

