import React from 'react'
import Logo from '../Image/logo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
// import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-holder'>
            <div className='logo-holder'>
              <img src={Logo} alt="" /> 
            </div>

            <div className='link-holder'>
              <ul>
                <li>Shipping <ExpandMoreIcon/> </li>
                <li>Tracking <ExpandMoreIcon/></li>
                <li>Support <ExpandMoreIcon/></li>
                <li>Account <ExpandMoreIcon/></li>
              </ul>
            </div>

            <div className='icon-links'>
              <div className='icon-holder'>
                <a href=''>Sign up/ Log in <AccountCircleIcon/></a>             
                <SearchIcon/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar