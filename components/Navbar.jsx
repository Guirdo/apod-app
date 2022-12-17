/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import cx from 'classnames';
import {Cancel, Menu} from 'iconoir-react';
import QualitySwitch from './QualitySwitch';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const itemClasses = cx('navbar__item', {'navbar__item--active': isActive});

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
        <li className={itemClasses}>
          <Link
            className='navbar__link'
            to='/random'
          >
            Random picture
          </Link>
        </li>
        <li className={itemClasses}>
          <QualitySwitch />
        </li>
        <li
          className="navbar__toggle"
          onClick={() => setIsActive(!isActive)}
        >
          {
            !isActive ? (
              <span><Menu strokeWidth={2} /></span>
            ) : (
              <span><Cancel strokeWidth={2} /></span>
            )
          }
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
