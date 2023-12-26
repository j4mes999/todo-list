import { getUnixTime, format, parse, compareAsc } from "date-fns";
const DATE_FORMAT = 'M/d/yyyy';

//Pre: date is in format "M-d-yyyy"
function processDate(stringDate){
  const date = parse(stringDate,DATE_FORMAT, new Date());
  const formattedDate = format(date, DATE_FORMAT);
  return getUnixTime(formattedDate);
}

function isBeforeFromNow(date){
  //TODO call this one when creating a task
  const compareResult = compareAsc(new Date(), date);
  if (compareResult == 1){
    return true;
  }

  return false;
}

export default processDate;