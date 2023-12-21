import { getTime, format } from "date-fns";
const DATE_FORMAT = 'dd-MM-yyyy';

//Pre: date is in format "dd-MM-yyyy"
function processDate(date){
  const dateSplit = date.split('-');
  const formattedDate = format(new Date(dateSplit[0], dateSplit[1], dateSplit[2]), 'dd-MM-yyyy');
  return getTime(formattedDate);
}

export default processDate;