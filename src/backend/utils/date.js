import { getUnixTime, format, parse } from "date-fns";
const DATE_FORMAT = 'M/d/yyyy';

//Pre: date is in format "M-d-yyyy"
function processDate(stringDate){
  const date = parse(stringDate,DATE_FORMAT, new Date());
  console.log('date.js date: '+date);
  const formattedDate = format(date, DATE_FORMAT);
  return getUnixTime(formattedDate);
}

export default processDate;