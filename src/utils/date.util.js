import moment from 'moment';
const DATE_FORMAT = 'DD-MMM-YYYY';

/**
 * 
 * @param {date} from 
 * @param {date} to 
 * @param {string} format - format of the dates passed
 */
export function getDuration (from, to, format) {
    var duration;
    // convert all dates into 1 format
    from = moment(from, format).format(DATE_FORMAT);
    // if date is 'Present' get current date
    to = (isPresent(to)) ? moment().format(DATE_FORMAT) : moment(to, format).format(DATE_FORMAT);

    // get days since it is the smallest then go up to biggest
    var diff = moment(moment(to, DATE_FORMAT)).diff(moment(from, DATE_FORMAT), 'days');
    console.log(diff);
    if (diff > 365) { // year as biggest unit
        duration = diffYears(diff);
    } else if (diff > 30) { // month as biggest unit
        duration = diffMonths(diff);
    } else { // day as biggest unit
        duration = diff + ' days';
    }

    return duration;
}

function diffYears(diff) {
    return diff + ' years';
}

function diffMonths(diff) {
    var months = Math.floor(diff / 30) + 1;
    diff = months;
    return diff + ' months';
}

// check if date is 'Present'
function isPresent(date) {
    return date === 'Present';
}
