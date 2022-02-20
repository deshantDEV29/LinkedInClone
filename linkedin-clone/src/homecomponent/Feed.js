import React from 'react'
import './Feed.css'
import profile from '../assets/profile.png'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <div className='header__left'>
          <img classname='profile__pic' src={profile} alt=''/>
        </div>
        <div className='header__center'>
          <span>
            <h4>Deshant Singh</h4>
            <p>208,000 followers</p>
            <p>1 week</p>
          </span>
        </div>
        <div classname='header__right'>
          <p>+ Follow</p>
        </div>
      </div>
      <div className='feed__desc'>
        <p>Amazing innovation for professionals who prefer working on multiple screens!</p>
      </div>
      <div className='feed__media'>
        <img classname='profile__pic' src='https://imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg' alt=''/>
      </div>
      <div className='feed__feedback'>
        <ThumbUpIcon style={{color: "rgb(18, 88, 238)"}}/>  
        <p>249 comments</p>     
      </div>
      <div className='feed__buttons'>
        <span className='button__span'>
          <ThumbUpIcon />
          <p>Like</p>
        </span>
        <span className='button__span'>
          <CommentIcon/>
          <p>Comment</p>
        </span>
        <span className='button__span'>
          <ShareIcon/>
          <p>Share</p>
        </span>
        <span className='button__span'>
          <SendIcon/>
          <p>Send</p>
        </span>
      </div>
    </div>
  )
}

export default Feed