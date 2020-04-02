import React, { useState } from 'react';
import logo from '../../assets/imgs/logo.png';
import HeaderContent from './HeaderContent';
import Tabs from './Tabs';

export default function Header() {
  const [activeLink, setActiveLink] = useState(0);
  const handleClick = i => {
    setActiveLink(i);
  };
  const calculateId = () => (activeLink === 0 ? 'header-home' : 'header-inner');

  return (
    <header id={calculateId()}>
      <div className='container'>
        <nav id='main-nav'>
          <img src={logo} alt='MyPortfolio' id='logo' />
          <Tabs activeLink={activeLink} handleClick={handleClick} />
        </nav>
        {activeLink === 0 && <HeaderContent handleClick={handleClick} />}
      </div>
    </header>
  );
}
