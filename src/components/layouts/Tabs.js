import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

export default function Tabs({ activeLink, handleClick }) {
  const tabs = [
    { id: 0, name: 'Home', path: '/' },
    { id: 1, name: 'About', path: '/about' },
    { id: 2, name: 'Work', path: '/work' },
    { id: 3, name: 'Contact', path: '/contact' }
  ];
  return (
    <ul>
      {tabs.map(tab => {
        return (
          <Tab
            key={tab.id}
            tab={tab}
            activeLink={activeLink}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
}

Tabs.propTypes = {
  activeLink: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};
