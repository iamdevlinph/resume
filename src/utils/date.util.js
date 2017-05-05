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
    if (diff > 365) { // year as biggest unit
        duration = diffYears(diff);
    } else if (diff > 30) { // month as biggest unit
        duration = diffMonths(diff);
    } else { // day as biggest unit
        duration = diff + ' days';
    }

    return duration;
}

// To Do
function diffYears(diff) {
    var years = Math.floor(diff / 365);
    var yearStr = (years > 1) ? 'years' : 'year';
    var remainder = diff - (years * 365);
    var returnString = years + ' ' + yearStr;
    if (remainder > 30) { // considered as month
        var months = Math.floor(remainder / 30);
        returnString +=', ' + months + ' months';
    }
    return returnString;
}

function diffMonths(diff) {
    // + 1 to include current month
    var string = 'month';
    var months = Math.floor(diff / 30) + 1;
    diff = months;
    return diff + ' ' + ((months > 1) ? string + 's' : string);
}

// check if date is 'Present'
function isPresent(date) {
    return date === 'Present';
}
