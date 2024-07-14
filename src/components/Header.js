import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          alt='menu'
          src='https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg'
        />
        <a href='/'>
          <img
            className='h-8 mx-2'
            alt='youtube-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/1280px-YouTube_Logo_%282013-2017%29.svg.png'
          />
        </a>
      </div>
      <div className='col-span-10 px-10'>
        <div>
          <input
            className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
            type='text'
            placeholder='search...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200'>
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className='fixed bg-white py-2 px-2 w-[31.5rem] shadow-lg rounded-lg border border-gray-100'>
            <ul>
              {suggestions.map((s) => (
                <li key={s} className='py-1 px-3 shadow-sm hover:bg-gray-100'>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className='col-span-1'>
        <img
          className='h-8'
          alt='user-icon'
          src='https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png'
        />
      </div>
    </div>
  );
};

export default Header;
