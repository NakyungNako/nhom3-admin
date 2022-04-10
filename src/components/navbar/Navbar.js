import React from 'react'
import "./navbar.css";
import { AccountCircleOutlined } from '@mui/icons-material';

export default function Navbar() {
  return (
    <div className='nav'>
        <div className='nav-wrap'>
            <img src='https://c1.neweggimages.com/WebResource/Themes/Nest/logos/Newegg_full_color_logo_RGB.SVG' alt='new-egg' className='nav-logo'/>
            <div className='nav-title'>ADMIN</div>
            <AccountCircleOutlined fontSize='large'/>
            <div className='nav-username'>UserAdmin</div>
        </div>
    </div>
  )
}
