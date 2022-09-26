import { DateTime, monthsLong } from './luxon.js';
import { date } from './variables.js';

const d = DateTime.now();
date.textContent = monthsLong[d.month - 1].concat(' ', d.day, 'th ', d.year, ', ',
d.hour % 12, ':', d.minute >= 10 ? d.minute : '0'.concat(d.minute), ':', d.second, d.hour >= 12 ? ' pm' : ' am');