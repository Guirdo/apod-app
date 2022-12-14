/* eslint-disable require-jsdoc */
import React from 'react';
import QualitySwitch from './QualitySwitch';

function Header() {
  return (
    <header className="header">
      <span className="header__brand">Astronomical Picture Of the Day</span>

      <QualitySwitch />
    </header>
  );
}

export default Header;
