/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React from 'react';
import moment from 'moment';
import {ArrowLeft, ArrowRight} from 'iconoir-react';
import isAValidDate from '../helper/isAValidDate';
import useAPODStore from '../stores/apod';
import useUIStore from '../stores/ui';
import Picture from './Picture';

function Slider() {
  const date = useAPODStore((state) => state.date);
  const isLoading = useAPODStore((state) => state.isLoading);
  const setIsLoading = useAPODStore((state) => state.setIsLoading);
  const setErrorMessage = useUIStore((state)=> state.setErrorMessage);
  const fetchAPODWithDate = useAPODStore((state) => state.fetchAPODWithDate);

  const handlePrevious = () => {
    const previousDate = moment(date).subtract(1, 'day').format('YYYY-MM-DD');
    const dateValidation = isAValidDate(previousDate);

    if (dateValidation === true) {
      setIsLoading();
      fetchAPODWithDate(previousDate);
    } else {
      setErrorMessage(dateValidation);
    }
  };

  const handleNext = () => {
    const nextDate = moment(date).add(1, 'day').format('YYYY-MM-DD');
    const dateValidation = isAValidDate(nextDate);

    if (dateValidation === true) {
      setIsLoading();
      fetchAPODWithDate(nextDate);
    } else {
      setErrorMessage(dateValidation);
    }
  };

  return (
    <div className="slider">
      <figure className="slider-figure">
        {
          isLoading ?
            <h3 style={{color: 'white'}}>Loading...</h3> :
            <Picture />
        }
      </figure>

      <button
        className="button slider__previous"
        onClick={handlePrevious}
      >
        <ArrowLeft strokeWidth={2.5}/>
      </button>

      <button
        className="button slider__next"
        onClick={handleNext}
      >
        <ArrowRight strokeWidth={2.5}/>
      </button>
    </div>
  );
}

export default Slider;
