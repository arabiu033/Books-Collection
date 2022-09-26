import { DateTime, monthsLong } from './luxon.js';
import { date } from './variables.js';

const handler = (val) => {
  switch (val) {
    case 1: return 'st ';
    case 2: return 'nd ';
    case 3: return 'rd ';
    default: return 'th ';
  }
};

const d = DateTime.now();
date.textContent = monthsLong[d.month - 1].concat(' ', d.day, handler(d.day), d.year, ', ',
  d.hour % 12, ':', d.minute >= 10 ? d.minute : '0'.concat(d.minute), ':', d.second, d.hour >= 12 ? ' pm' : ' am');
