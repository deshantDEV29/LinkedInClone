import React from 'react'
import './Add__toFeed.css'
import InfoIcon from '@mui/icons-material/Info';
import Recommendation from './Recommendation';

function Add__toFeed() {
  return (
    <div className='add__tofeed'>
        <div className='add__header'>
            <p> Add to your feed</p>
            <InfoIcon/>
        </div>
        <div>
            <Recommendation/>
        </div>
    </div>
  )
}

export default Add__toFeed