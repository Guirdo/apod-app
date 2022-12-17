/* eslint-disable react/react-in-jsx-scope */
import moment from 'moment';
import {DiceFive} from 'iconoir-react';
import useAPODStore from '../stores/apod';

/* eslint-disable require-jsdoc */
function RandomDatePicker() {
  const date = useAPODStore((state) => state.date);
  const fetchRandomPicture = useAPODStore((state) => state.fetchRandomPicture);
  const isLoading = useAPODStore((state) => state.isLoading);
  const setIsLoading = useAPODStore((state) => state.setIsLoading);
  const year = moment(date).year();
  const month = moment(date).month() + 1;
  const day = moment(date).date();

  const handleRandom = async () => {
    setIsLoading();
    await fetchRandomPicture();
  };

  return (
    <div className='date-picker'>
      {
        isLoading ?
        <h3 style={{color: 'white'}}>Loading...</h3> :
          <>
            <div className="date-picker-group">
              <span className='date-picker__year'>{year}</span>
              <label className='date-picker__label'>Year</label>
            </div>
            <div className="date-picker-group">
              <span className='date-picker__month'>{month}</span>
              <label className='date-picker__label'>Month</label>
            </div>
            <div className="date-picker-group">
              <span className='date-picker__day'>{day}</span>
              <label className='date-picker__label'>Day</label>
            </div>
          </>
      }

      <button
        className='button date-picker__button'
        onClick={handleRandom}
        disabled={isLoading}
      >
        <DiceFive strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default RandomDatePicker;
