import React from 'react';
import { useState } from 'react';
import {GiHamburgerMenu, GiHasmburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggle, setToggle] =useState(false);
  return ( 
  <nav className=' app__navbar'>
   <div className='app__navbar-logo'>
      <img src ={images.Joss} alt='app logo' />
    </div>
      <ul className='app__navbar-links'>
        <li className='p_opensans'> <a href='#home'>Home </a></li>
        <li className='p_opensans'> <a href='#about'>About </a></li>
        <li className='p_opensans'> <a href='#menu'>Menu </a></li>
        <li className='p_opensans'> <a href='#awards'>Awards</a></li>
        <li className='p_opensans'> <a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'> Log In / Register </a>
        <a href='#' className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() =>setToggle(true)} /> 
        
        {toggle &&( 
          <div className='app__navbar__smallscreen-overlay'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick ={()=>setToggle(false)} />
            <ul className='app__navbar__smallscreen-links'>
              <li className='p_opensans'> <a href='#home'>Home </a></li>
              <li className='p_opensans'> <a href='#about'>About </a></li>
              <li className='p_opensans'> <a href='#menu'>Menu </a></li>
              <li className='p_opensans'> <a href='#awards'>Awards</a></li>
              <li className='p_opensans'> <a href='#contact'>Contact</a></li>
            </ul>
          </div>
        )} 
  
      </div> 
  </nav>
);
}
export default Navbar;