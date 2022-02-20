import React from 'react'
import  './Header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link } from 'react-router-dom'; 


function Header() {
  return (
     <div className = 'header'>
        <Link to='/'>
          <div >
            < LinkedInIcon className='header__logo'/>
          </div>
        </Link>
      
          <div className = "header__search">
              <input className = "header__searchInput" type = "text" placeholder='Search'></input>  
              <SearchIcon className = "header__searchIcon"/>
          </div>
          <div className = "header__nav">
            
                <Link to='/'>
                    <div  className = 'header__option'>
                    <span className = 'header__optionLineOne'><HomeIcon /> </span> 
                    <span className = 'header__optionLineTwo'>Home</span> 
                </div>
                </Link> 
                <Link to='network'>
                    <div className = 'header__option'>
                        <span className = 'header__optionLineOne'><PeopleAltIcon/></span> 
                        <span className = 'header__optionLineTwo'>My Networks</span> 
                    </div>
                </Link>
                <div className = 'header__option'>
                    <span className = 'header__optionLineOne'><WorkIcon/></span> 
                    <span className = 'header__optionLineTwo'>My Jobs</span> 
                </div>
                <div className = 'header__option'>
                    <span className = 'header__optionLineOne'><ChatIcon/></span> 
                    <span className = 'header__optionLineTwo'>Messaging</span> 
                </div>
                <div className = 'header__option'>
                    <span className = 'header__optionLineOne'><NotificationsIcon/></span> 
                    <span className = 'header__optionLineTwo'>Notifications</span> 
               </div>
               <div className = 'header__option'>
                    <span className = 'header__optionLineOne'><AccountCircleIcon/></span> 
                    <span className = 'header__optionLineTwo'>Me</span> 
               </div>
               <div className = 'header__work'>
                    <span className = 'header__optionLineOne'><AppsIcon/></span> 
                   <span className = 'header__optionLineTwo'>Work</span> 
               </div>
               <div className = 'header__option'>
                    <span className = 'header__work__desc'>Get Hired Faster</span> 
                    <span className = 'header__work__desc'>Try Premium</span> 
               </div>
              
               
              
          </div>
        </div>
  )
}

export default Header