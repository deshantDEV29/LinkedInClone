import React from 'react'
import './Post.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import profile from '../assets/profile.png'

function Post() {
  return (
    <div className='post'>
      <div className='post__row1'>
          <img classname='profile__pic' src={profile} alt=''/>
          <input className = "post__input" type = "text" placeholder='Start a Post'></input>  
   
        
      </div>
      <div className='post__row2'>
        <div className='post__column2'>
          <span style={{color: "DodgerBlue"}}>
            <InsertPhotoIcon/>
          </span>
          <span>
            <p>Photo</p>
          </span>
        </div>
        <div className='post__column2'>
          <span style={{color: "#32CD32"}}>
            <OndemandVideoIcon/>
          </span>
          <span>
            <p>Video</p>
          </span>
        </div>
        <div className='post__column2'>
          <span style={{color: "Orange"}}>
            <EventIcon/>
          </span>
          <span>
            <p>Event</p>
          </span>
        </div>
        <div className='post__column2'>
          <span style={{color: "rgba(255, 99, 71, 0.5)"}}>
            <ArticleIcon/>
          </span>
          <span>
            <p>Write article</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Post