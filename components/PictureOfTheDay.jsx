import React, {useEffect} from 'react';
import useAPODStore from '../stores/apod';
import DatePicker from './DatePicker';
import PictureData from './PictureData';
import Slider from './Slider';

// eslint-disable-next-line require-jsdoc
function PictureOfTheDay() {
  const fetchAPOD = useAPODStore((state) => state.fetchAPOD);

  useEffect(() => {
    fetchAPOD();
  });

  return (
    <main className='main'>
      <DatePicker />
      <Slider />
      <PictureData />
    </main>
  );
}

export default PictureOfTheDay;
