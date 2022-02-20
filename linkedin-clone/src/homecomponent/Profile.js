import React from 'react'
import  './Profile.css'
import profile from '../assets/profile.png'
import background from '../assets/background.png'

function Profile() {
  return (
    <div className='profile'>
        <div className='summary'>
             <div className='image__stack'>
                 <div className='summary__background'> 
                <img  src={background} alt=''/>
                </div>
                <div className='summary__pic'>
                    <img src={profile} alt=''/>
                </div>
             </div>
            
            <h3>Deshant Singh</h3>
            <p>Student at the University of the South Pacific</p>
        </div>
        <div className='connections'>
            <span>
                <div>
                    <p>Connections</p>
                    <h4>Grow your network</h4>
                </div>
                
                <h4>42</h4>
            </span>
            
        </div>
        <div className='views'>
            <span>
                <p>Who viewed your profile</p>
            </span>
            <span>
                <h4>20</h4>
            </span>
        </div>
        <div className='premium'>
            <p>Access exclusive toold and insights</p>
        </div>
        <div className='my__items'>
            <p>My Items</p>
        </div>
    </div>
  )
}

export default Profile