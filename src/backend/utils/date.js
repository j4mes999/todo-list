import { getUnixTime, format, parse, compareAsc } from "date-fns";
const DATE_FORMAT = 'M/d/yyyy';

//Pre: date is in format "M-d-yyyy"
function processDate(stringDate){
  const date = parse(stringDate,DATE_FORMAT, new Date());
  const formattedDate = format(date, DATE_FORMAT);
  return getUnixTime(formattedDate);
}

function isBeforeFromNow(date){
  const now = new Date();
  const formattedNow = format(now, DATE_FORMAT);
  const parsedNow = parse(formattedNow, DATE_FORMAT, new Date());
  const compareResult = compareAsc(date, parsedNow);
  if (compareResult < 0){
    return true;
  }

  return false;
}

export {processDate, isBeforeFromNow};