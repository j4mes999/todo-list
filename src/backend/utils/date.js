import { getUnixTime, format, parse } from "date-fns";
const DATE_FORMAT = 'dd/MM/yyyy';

//Pre: date is in format "dd-MM-yyyy"
function processDate(stringDate){
  const date = parse(stringDate,DATE_FORMAT, new Date());
  const formattedDate = format(date, DATE_FORMAT);
  return getUnixTime(formattedDate);
}

export default processDate;