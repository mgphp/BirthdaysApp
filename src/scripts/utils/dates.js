const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function todaysDate() {
  var date = new Date();
  var locale = "en-us";
  var month = date.toLocaleString(locale, { month: "long" });
  var n = date.getDate();
  return `${n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')} ${month} ${date.getFullYear()}`;
}

export function parseTodaysDate(date) {
  let birthdayDate = new Date(date);
  let birthday = birthdayDate.getDate() + '' + birthdayDate.getMonth();
  let todaysDate = new Date();
  let today = todaysDate.getDate() + '' + todaysDate.getMonth();
  return birthday === today ? true : false;
}

export function parseNextTwoWeeks(date) {
  //Get the date value of next week.
  let today = new Date();
  let fortnightAway = new Date(Date.now() + 12096e5);
  let parsedDate = new Date(date);
  let updateDate = new Date(today.getFullYear() + '-' + ('0' + (parsedDate.getMonth()+1)).slice(-2)  + '-' + ('0' + parsedDate.getDate()).slice(-2));
  return Date.parse(updateDate) > Date.parse(today) && Date.parse(updateDate) < Date.parse(fortnightAway)  ? true : false;
}

export function parseDateSort(date) {
  dateStrings.sort(function(a,b) {
    var aComps = a.split("/");
    var bComps = b.split("/");
    var aDate = new Date(aComps[2], aComps[1], aComps[0]);
    var bDate = new Date(bComps[2], bComps[1], bComps[0]);
    return aDate.getTime() - bDate.getTime();
  });
}

export function parseDateStr(date,showYear) {
  var date = new Date(date);
  var locale = "en-us";
  var month = date.toLocaleString(locale, { month: "long" });
  var n = date.getDate();
  return `${n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')} ${month} ${showYear === true ? date.getFullYear() : ''}`;
}

export function getAgefromDate(date) {
  var birthday = +new Date(date);
  return ~~((Date.now() - birthday) / (31557600000));
}

export function dateDiff(date) {
  var now = new Date();
  var splitStr = date.split('-');
  var timestamp = Date.parse(now.getFullYear() + '-' + splitStr[1] + '-' + splitStr[2]);
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
    return r.month + ' Month' + (r.month > 1 ? 's' : '');
  } else if(r.week >= 1) {
    return r.week + ' Week' + (r.week > 1 ? 's' : '');
  } else {
    var days;
    if (r.day == 0) {
      days = 'Today';
    } else if (r.day == 1) {
       days = "Tomorrow";
    } else {
      days = r.day + ' Day' + (r.day > 1 ? 's' : '');
    }
    return days;
  }
}