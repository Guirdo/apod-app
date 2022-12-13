/* eslint-disable require-jsdoc */
import React, {useEffect} from 'react';
import moment from 'moment';
import {useForm} from '../hooks/useForm';
import {Send} from 'iconoir-react';
import useAPODStore from '../stores/apod';
import isAValidDate from '../helper/isAValidDate';

function DatePicker() {
  const date = useAPODStore((state) => state.date);
  const fetchAPODWithDate = useAPODStore((state) => state.fetchAPODWithDate);
  const [dateValues, handleInputChange, modifyValues] = useForm({
    year: moment(date).year(),
    month: moment(date).month() + 1,
    day: moment(date).date(),
  });

  const {year, month, day} = dateValues;

  useEffect(() => {
    // When the date changes, this function will modify
    // the useForm initialState
    modifyValues({
      year: moment(date).year(),
      month: moment(date).month() + 1,
      day: moment(date).date(),
    });
  }, [date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line max-len
    const newDate = `${year}-${month < 10 ? '0'+parseInt(month) : month}-${day < 10 ? '0'+parseInt(day):day}`;
    const dateValidation = isAValidDate(newDate);

    if (dateValidation === true) {
      fetchAPODWithDate(newDate);
    } else {
      alert(dateValidation);
    }
  };

  return (
    <form
      className="date-picker"
      onSubmit={handleSubmit}
    >
      <div className='date-picker-group'>
        <input
          className="date-picker__year"
          name="year"
          type="number"
          min={1995}
          max={moment().year()}
          value={year}
          onChange={handleInputChange}
        />
        <label className='date-picker__label'>Year</label>
      </div>
      <div className="date-picker-group">
        <input
          className='date-picker__month'
          name="month"
          type="number"
          min={1}
          max={12}
          value={month}
          onChange={handleInputChange}
        />
        <label className='date-picker__label'>Month</label>
      </div>
      <div className="date-picker-group">
        <input
          className='date-picker__day'
          name="day"
          type="number"
          min={1}
          max={31}
          value={day}
          onChange={handleInputChange}
        />
        <label className="date-picker__label">Day</label>
      </div>
      <button
        className='date-picker__button'
      >
        <Send />
      </button>
    </form>
  );
}

export default DatePicker;
