import React from 'react'
import './Recommendation.css'
import profile from '../assets/profile.png'


function Recommendation() {
  return (
    <div className='recommendation'>
        <div className='rec__pic'>
            <img classname='profile__pic' src={profile} alt=''/>
        </div>
        <div className='rec__info'>
            <h5>Women's Fund Fiji</h5>
            <p>Company . Nonprofit</p>
            <button>+ Follow</button>
        </div>
    </div>
  )
}

export default Recommendation