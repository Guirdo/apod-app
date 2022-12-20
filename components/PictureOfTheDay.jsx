/* eslint-disable camelcase */
import React, {useEffect} from 'react';
import moment from 'moment';
import {useLocation, useNavigate} from 'react-router-dom';
import useAPODStore from '../stores/apod';
import DatePicker from './DatePicker';
import PictureData from './PictureData';
import Slider from './Slider';
import isAValidDate from '../helper/isAValidDate';
import useUIStore from '../stores/ui';

// eslint-disable-next-line require-jsdoc
function PictureOfTheDay() {
  const fetchAPOD = useAPODStore((state) => state.fetchAPOD);
  const fetchAPODWithDate = useAPODStore((state) => state.fetchAPODWithDate);
  const setDate = useAPODStore((state) => state.setDate);
  const setErrorMessage = useUIStore((state) => state.setErrorMessage);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const dateQuery = new URLSearchParams(location.search).get('date');
    if (!dateQuery) {
      setDate(moment().format('YYYY-MM-DD'));
      fetchAPOD();
    } else {
      const dateValidation = isAValidDate(dateQuery);

      if (dateValidation === true) {
        fetchAPODWithDate(dateQuery);
      } else {
        setErrorMessage(dateValidation);
        navigate('/');
      }
    }
  }, []);

  return (
    <>
      <DatePicker />
      <Slider />
      <PictureData />
    </>
  );
}

export default PictureOfTheDay;
