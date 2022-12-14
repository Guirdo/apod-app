/* eslint-disable require-jsdoc */
import React from 'react';
import useAPODStore from '../stores/apod';

function PictureData() {
  const title = useAPODStore((state) => state.title);
  const explanation = useAPODStore((state) => state.explanation);
  const copyright = useAPODStore((state) => state.copyright);
  const isLoading = useAPODStore((state)=> state.isLoading);

  return (
    <div className='picture-data'>
      {
        isLoading ?
        <h2>Loading...</h2> :
        <div>
          <h2 className='picture__title'>{title}</h2>
          <p className='picture__explanation'>{explanation}</p>
          <p className='picture__copyright'>
            <span className='picture__label'>Credits: </span>
            {copyright || 'No data'}
          </p>
        </div>
      }
    </div>
  );
}

export default PictureData;
