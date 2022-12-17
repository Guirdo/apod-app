/* eslint-disable require-jsdoc */
import React from 'react';
import {Link} from 'react-router-dom';
import QualitySwitch from './QualitySwitch';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className='navbar-list'>
        <li className="navbar__brand">
          <Link
            className='navbar__link'
            to='/'
          >
            Astronomical Picture Of the Day
          </Link>
        </li>
        <li className='navbar__item'>
          <Link
            className='navbar__link'
            to='/random'
          >
            Random picture
          </Link>
        </li>
        <li className='navbar__item'>
          <QualitySwitch />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
