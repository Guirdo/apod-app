import moment from 'moment';

/* eslint-disable require-jsdoc */
function isAValidDate(date) {
  if (!moment(date).isValid()) {
    return 'Invalid date';
  } else if (!moment(date).isSameOrBefore(moment())) {
    return `There's no picture for tomorrow`;
  } else if (!moment(date).isSameOrAfter('1995-06-16')) {
    return `There's no picture before 1995-06-16`;
  }

  return true;
}

export default isAValidDate;
