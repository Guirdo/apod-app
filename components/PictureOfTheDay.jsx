import moment from 'moment';
import React, {useEffect} from 'react';
import useAPODStore from '../stores/apod';
import DatePicker from './DatePicker';
import PictureData from './PictureData';
import Slider from './Slider';

// eslint-disable-next-line require-jsdoc
function PictureOfTheDay() {
  const fetchAPOD = useAPODStore((state) => state.fetchAPOD);
  const setDate = useAPODStore((state)=>state.setDate);

  useEffect(() => {
    setDate(moment().format('YYYY-MM-DD'));
    fetchAPOD();
  });

  return (
    <>
      <DatePicker />
      <Slider />
      <PictureData />
    </>
  );
}

export default PictureOfTheDay;
