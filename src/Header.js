import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { clicked } from './utils/sideBarSlice';
import { SEARCH_SUGGESTION_API } from './utils/constants';
import { updateResults } from './utils/videosSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedQueries, setsuggestedQueries] = useState([]);
  const [focus, setFocus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      getsuggestQueries();
    }, 200);
    return () => {
      clearInterval(timer);
    }
  }, [searchQuery])

  const getsuggestQueries = async () => {
    const data = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setsuggestedQueries(json[1]);
  }

  const handleEvent = (query) => {
    const timer = setTimeout(() => {
      setFocus(false);
    }, 50);
    setSearchQuery(query);
    dispatch(updateResults(query));
  }

  return (
   
 

    <div className='flex h-20 justify-between p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 sticky top-0'>
  <img
    onClick={() => dispatch(clicked())}
    alt='menu'
    src='https://thumbs.dreamstime.com/z/basic-app-burger-menu-icon-design-can-be-use-your-ui-ux-design-94905847.jpg'
    className='cursor-pointer h-8 w-auto'
  />
  <a href='/'>
    <img
      alt='logo'
      className='pr-5 h-16 w-30'
      src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-700x394.png'
      style={{ maxWidth: '120px' }}
    />
  </a>
  <div className='w-full md:w-3/4 mt-2 relative'>
    <input
      onFocus={() => setFocus(true)}
      onBlur={() => handleEvent()}
      onChange={(e) => setSearchQuery(e.target.value)}
      className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 mb-2 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
      placeholder='Search for anything...'
      value={searchQuery}
      type='text'
      name='search'
    />
    {focus && (
      <div className='absolute left-0 right-0 bg-white rounded-b-md border border-slate-300 shadow-sm'>
        {suggestedQueries.map((query, index) => {
          return (
            <div
              key={index}
              onClick={() => handleEvent(query)}
              className='p-2 pl-4 hover:bg-sky-700 cursor-pointer'
            >
              🔎 {query}
            </div>
          );
        })}
      </div>
    )}
  </div>
  <img
    alt='profile'
    src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='
    className='cursor-pointer h-8 w-auto'
  />
</div>

  )
}
export default Header;