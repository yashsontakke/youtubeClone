import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import Video from './Video';
import { GET_VIDEOS } from './utils/constants';
import { useSelector } from 'react-redux';

const Videos = () => {
  const [videos, Setvideos] = useState(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const searchedword = useSelector((state) => (
    state.videos.searchedword
  ));
  
  useEffect(() => {
    const loadPopularVideos = async () => {
      const data = await fetch(GET_VIDEOS);
      const json = await data.json();
      Setvideos(json);
    }
    // const timer = setTimeout(() => {
      loadPopularVideos();
    // }, 100);
    
  }, [])

  useEffect(() => {
    const getQueryData = async () => {
      const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchedword}&type=video&key=AIzaSyDPI5Hbkc_kmnOhjL60JW21CiFKBm_RalU`);
      const json = await data.json();
      setResults(json);
    }
    getQueryData();
    console.log("updated");
  }, [searchedword])
  return (
    <>
      {searchedword === "" ?
        <div className='flex flex-wrap overflow-y-auto'>
          {videos ? videos.items.map((item) => {
            return <Video info={item} key={item.id} type="popular" />
          }) : <Shimmer />}
        </div>
        :
        <div className='flex flex-wrap overflow-y-auto'>
          {results ? results.items.map((item) => {
            return <Video info={item} key={item.id} type="searched"/>
          }) : <Shimmer />}
        </div>
      }

    </>
  )
}
export default Videos