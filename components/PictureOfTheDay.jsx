import React from 'react';
import DatePicker from './DatePicker';
import Slider from './Slider';

// eslint-disable-next-line require-jsdoc
function PictureOfTheDay() {
  return (
    <main className='main'>
      <DatePicker />
      <Slider />
    </main>
  );
}

export default PictureOfTheDay;
