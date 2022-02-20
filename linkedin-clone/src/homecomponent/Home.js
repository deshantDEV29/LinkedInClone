import React from 'react'
import Post from './Post'
import Feed from './Feed'
import Profile from './Profile'
import Discover__more from './Discover__more'
import Add__toFeed from './Add__toFeed'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './Home.css'

function home() {
  return (
    <div className='home'>
        <div className='home__left'>
          <Profile/>
          <Discover__more/>
        </div>
        <div className='home__center'>
          <div><Post/></div>
          <div className='sort__by'>
            <span className='sort__left'>
              <hr/>
            </span>
            <span className='sort__center'>
              <p>Sort by:</p>
              
            </span>           
            <span className='sort__right'>
              <h4>Top</h4>
              <ArrowDropDownIcon/>
            </span>
            
          </div>
          <div><Feed/></div>
        </div>
        <div className='home__right'><Add__toFeed/></div>
    </div>
  )
}

export default home