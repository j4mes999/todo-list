import { getUnixTime, getTime, format } from "date-fns";
const DATE_FORMAT = 'dd/MM/yyyy';

//Pre: date is in format "dd-MM-yyyy"
function processDate(date){
  const dateSplit = date.split('/');
  console.log({dateSplit});
  const formattedDate = format(new Date(dateSplit[2], dateSplit[0], dateSplit[1]), DATE_FORMAT);
  return getUnixTime(formattedDate);
}

export default processDate;