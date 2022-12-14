/* eslint-disable require-jsdoc */
import {ArrowLeft, ArrowRight} from 'iconoir-react';
import moment from 'moment';
import React from 'react';
import isAValidDate from '../helper/isAValidDate';
import useAPODStore from '../stores/apod';

function Slider() {
  const date = useAPODStore((state) => state.date);
  const url = useAPODStore((state) => state.url);
  const title = useAPODStore((state) => state.title);
  const isLoading = useAPODStore((state)=> state.isLoading);
  const setIsLoading = useAPODStore((state)=> state.setIsLoading);
  const fetchAPODWithDate = useAPODStore((state) => state.fetchAPODWithDate);

  const handlePrevious = () => {
    const previousDate = moment(date).subtract(1, 'day').format('YYYY-MM-DD');
    const dateValidation = isAValidDate(previousDate);

    if (dateValidation === true) {
      setIsLoading();
      fetchAPODWithDate(previousDate);
    } else {
      alert(dateValidation);
    }
  };

  const handleNext = () => {
    const nextDate = moment(date).add(1, 'day').format('YYYY-MM-DD');
    const dateValidation = isAValidDate(nextDate);

    if (dateValidation === true) {
      setIsLoading();
      fetchAPODWithDate(nextDate);
    } else {
      alert(dateValidation);
    }
  };

  return (
    <div className="slider">
      <figure className="slider-figure">
        {
          isLoading ?
            <h3 style={{color: 'white'}}>Loading...</h3> :
            <img
              className='slider__image'
              src={url}
              alt={title}
            />
        }
      </figure>

      <button
        className="slider__previous"
        onClick={handlePrevious}
      >
        <ArrowLeft />
      </button>

      <button
        className="slider__next"
        onClick={handleNext}
      >
        <ArrowRight />
      </button>
    </div>
  );
}

export default Slider;
