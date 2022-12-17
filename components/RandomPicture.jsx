/* eslint-disable react/react-in-jsx-scope */

import {useEffect} from 'react';
import useAPODStore from '../stores/apod';
import Picture from './Picture';
import PictureData from './PictureData';
import RandomDatePicker from './RandomDatePicker';

/* eslint-disable require-jsdoc */
function RandomPicture() {
  const isLoading = useAPODStore((state)=> state.isLoading);
  const setIsLoading = useAPODStore((state)=> state.setIsLoading);
  const fetchRandomPicture = useAPODStore((state) => state.fetchRandomPicture);

  useEffect(() => {
    setIsLoading();
    fetchRandomPicture();
  }, []);

  return (
    <div className='random'>
      <RandomDatePicker />
      <div className='random-figure'>
        {
          isLoading ?
          <h3 style={{color: 'white'}}>Loading...</h3>:
          <Picture />
        }
      </div>
      <PictureData />
    </div>
  );
}

export default RandomPicture;
