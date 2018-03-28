import moment from 'moment';

const DATE_FORMAT = 'DD-MMM-YYYY';

// To Do
function diffYears(diff) {
  const years = Math.floor(diff / 365);
  const yearStr = (years > 1) ? 'years' : 'year';
  const remainder = diff - (years * 365);
  let returnString = `${years} ${yearStr}`;
  if (remainder > 30) { // considered as month
    const months = Math.floor(remainder / 30);
    returnString += `, ${months} months`;
  }
  return returnString;
}

function diffMonths(diff) {
  // + 1 to include current month
  const string = 'month';
  const months = Math.floor(diff / 30) + 1;
  const newDiff = months;
  return `${newDiff} ${(months > 1) ? `${string}s` : string}`;
}

// check if date is 'Present'
function isPresent(date) {
  return date === 'Present';
}

/**
 *
 * @param {date} from
 * @param {date} to
 * @param {string} format - format of the dates passed
 */
export function getDuration(from, to, format) {
  let duration;
  // convert all dates into 1 format
  const newFrom = moment(from, format).format(DATE_FORMAT);
  // if date is 'Present' get current date
  const newTo = (isPresent(to)) ?
    moment().format(DATE_FORMAT) : moment(to, format).format(DATE_FORMAT);

  // get days since it is the smallest then go up to biggest
  const diff = moment(moment(newTo, DATE_FORMAT)).diff(moment(newFrom, DATE_FORMAT), 'days');
  if (diff > 365) { // year as biggest unit
    duration = diffYears(diff);
  } else if (diff > 30) { // month as biggest unit
    duration = diffMonths(diff);
  } else { // day as biggest unit
    duration = `${diff} days`;
  }

  return duration;
}

