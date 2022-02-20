import React from 'react'
import './Discover__more.css'

function Discover__more() {
  return (
    <div className='discover__more'>
      <div className='discover__row1'>
        <span>
          <p>Groups</p>
        </span>
        <span>
          <p>Events</p>
          <p className='add__event'> +</p>
        </span>
        <span>
          <p>Followed Hashtags</p>
        </span>    
      </div>
      <div className='discover__row2'>
        <p className='discover__heading'>Discover More </p>
      </div>
    </div>
  )
}

export default Discover__more