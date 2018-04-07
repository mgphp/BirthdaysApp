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