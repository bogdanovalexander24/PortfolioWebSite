import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Tab({ tab, activeLink, handleClick }) {
  return (
    <li>
      <Link
        key={tab.id}
        to={tab.path}
        className={activeLink === tab.id ? 'current' : null}
        onClick={() => {
          handleClick(tab.id);
        }}
      >
        {tab.name}
      </Link>
    </li>
  );
}

Tab.propTypes = {
  tab: PropTypes.object.isRequired,
  activeLink: PropTypes.number,
  handleClick: PropTypes.func.isRequired
};
