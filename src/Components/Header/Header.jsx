import React from 'react'
import Navbar from './NavBar/Navbar';
import Topnav from './TopNav/Topnav'

const Header = () => {
  return (
    <header>
      <Topnav />
      <Navbar/>
    </header>
  );
}

export default Header
