/* eslint-disable require-jsdoc */
import React from 'react';
import moment from 'moment';
import {useForm} from '../hooks/useForm';
import {Send} from 'iconoir-react';

function DatePicker() {
  const [dateValues, handleInputChange] = useForm({
    year: moment().year(),
    month: moment().month() + 1,
    day: moment().date(),
  });

  const {year, month, day} = dateValues;

  const handleSubmit = (e)=>{
    e.preventDefault();
    // TODO: Implement date picking
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
