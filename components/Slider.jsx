/* eslint-disable require-jsdoc */
import {ArrowLeft, ArrowRight} from 'iconoir-react';
import React from 'react';

function Slider() {
  return (
    <div className="slider">
      <figure className="slider-figure">
        <img
          className='slider__image'
          src="https://picsum.photos/512/288"
          alt='A placeholder image'
        />
      </figure>

      <button
        className="slider__previous"
      >
        <ArrowLeft />
      </button>

      <button
        className="slider__next"
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default Slider;
