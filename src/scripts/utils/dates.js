const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
/**
 * Returns todays date with ordinality
 * @returns {string}
 */
export function todaysDate() {
  var date = new Date();
  var locale = "en-us";
  var month = date.toLocaleString(locale, { month: "long" });
  var n = date.getDate();
  return `${n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')} ${month} ${date.getFullYear()}`;
}

/**
 * Checks to see if todays if date is today
 * @param date
 * @returns {boolean}
 */
export function parseTodaysDate(date) {
  var birthdayDate = new Date(date);
  var birthday = birthdayDate.getDate() + '' + birthdayDate.getMonth();
  var todaysDate = new Date();
  var today = todaysDate.getDate() + '' + todaysDate.getMonth();
  return birthday === today ? true : false;
}

/**
 * Check whether dates fall between the next 2 weeks
 * @param date
 * @returns {boolean}
 */
export function parseNextTwoWeeks(date) {
  var today = new Date();
  var fortnightAway = new Date(Date.now() + 12096e5);
  var parsedDate = new Date(date);
  var updateDate = new Date(today.getFullYear() + '-' + ('0' + (parsedDate.getMonth()+1)).slice(-2)  + '-' + ('0' + parsedDate.getDate()).slice(-2));
  return Date.parse(updateDate) > Date.parse(today) && Date.parse(updateDate) < Date.parse(fortnightAway)  ? true : false;
}

/**
 * Sorts dates by oldest person
 * @param data
 * @returns {void|*|Array.<T>}
 */
export function sortedDates(data) {
  let sortedDates = data.sort(function (a, b) {
    var aComps = a.birthday.split("-");
    var bComps = b.birthday.split("-");
    var aDate = new Date(aComps[1] + '-' + aComps[2] + '-' + aComps[0]);
    var bDate = new Date(bComps[1] + '-' + bComps[2] + '-' + bComps[0]);
    return aDate - bDate;
  });
  return sortedDates;
}

/**
 * Converts date string to more freindly date str
 * @param date
 * @param showYear
 * @returns {string}
 */
export function parseDateStr(date,showYear) {
  var date = new Date(date);
  var locale = "en-us";
  var month = date.toLocaleString(locale, { month: "long" });
  var n = date.getDate();
  return `${n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')} ${month} ${showYear === true ? date.getFullYear() : ''}`;
}

/**
 * Gets age from birthday
 * @param date
 * @returns {number}
 */
export function getAgefromDate(date) {
  var birthday = +new Date(date);
  return ~~((Date.now() - birthday) / (31557600000));
}

/**
 * Works out the day/weeks/months difference from todays dare
 * @param date
 * @returns {*}
 */
export function dateDiff(date) {
  var parseDate;
  var now = new Date();
  if(typeof date === 'string') {
    var splitStr = date.split('-');
    parseDate = now.getFullYear() + '-' + splitStr[1] + '-' + splitStr[2]
  } else {
    var convertDate = new Date(date);
    parseDate =  now.getFullYear() + '-' + convertDate.getMonth() + '-' + convertDate.getDate();
  }

  var timestamp = Date.parse(parseDate);
  var d = Math.abs(timestamp - new Date().getTime()) / 1000;
  var r = {};
  var s = {
    month: 2592000,
    week: 604800,
    day: 86400
  };

  Object.keys(s).forEach(function(key){
    r[key] = Math.floor(d / s[key]);
    d -= r[key] * s[key];
  });

  if(r.month >= 1) {
    return `${r.month + ' Month' + (r.month > 1 ? 's' : '')} ${'away'}`;
  } else if(r.week >= 1) {
    return `${r.week}  ${'Week'}${(r.week > 1 ? 's' : '')} ${'away'}`;
  } else {
    var days;
    if (r.day == 0) {
      days = 'Today';
    } else if (r.day == 1) {
       days = "Tomorrow";
    } else {
      days = `${r.day} ${'Day'}${(r.day > 1 ? 's' : '')} ${'away'}`;
    }
    return days;
  }
}