/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
import React from 'react';
import moment from 'moment';
import {ArrowLeft, ArrowRight} from 'iconoir-react';
import isAValidDate from '../helper/isAValidDate';
import useAPODStore from '../stores/apod';
import useUIStore from '../stores/ui';

function Slider() {
  const date = useAPODStore((state) => state.date);
  const url = useAPODStore((state) => state.url);
  const hdurl = useAPODStore((state) => state.hdurl);
  const title = useAPODStore((state) => state.title);
  const media_type = useAPODStore((state) => state.media_type);
  const thumbnail_url = useAPODStore((state) => state.thumbnail_url);
  const isLoading = useAPODStore((state) => state.isLoading);
  const setIsLoading = useAPODStore((state) => state.setIsLoading);
  const fetchAPODWithDate = useAPODStore((state) => state.fetchAPODWithDate);
  const isHighQuality = useUIStore((state) => state.isHighQuality);

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

  const renderImageOrVideo = () => {
    return media_type === 'image' ?
      <img
        className='slider__image'
        src={isHighQuality ? hdurl : url}
        alt={title}
      /> :
      <>
        <img
          className='slider__image'
          src={thumbnail_url}
          alt={title}
        />
        <a
          className='button button--info'
          href={url}
          target="_blank"
          rel='noreferrer'
        >
          Watch this video
        </a>
      </>;
  };

  return (
    <div className="slider">
      <figure className="slider-figure">
        {
          isLoading ?
            <h3 style={{color: 'white'}}>Loading...</h3> :
            renderImageOrVideo()
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
