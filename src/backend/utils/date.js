import { getUnixTime, getTime, format, parse } from "date-fns";
const DATE_FORMAT = 'd/M/yyyy';

//Pre: date is in format "dd-MM-yyyy"
function processDate(stringDate){
  const date = parse(stringDate,DATE_FORMAT, new Date());
  const formattedDate = format(date, DATE_FORMAT);
  return getTime(formattedDate);
}

export default processDate;