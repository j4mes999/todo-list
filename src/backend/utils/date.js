import { getUnixTime, format, parse, compareAsc, fromUnixTime } from "date-fns";
const DATE_FORMAT = 'MM/dd/yyyy';

//Pre: date is in format "MM-dd-yyyy"
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

function getDateStringFromTimeStamp(timeStamp){
  const date =  fromUnixTime(timeStamp);
  return format(date,DATE_FORMAT);
}

function transformDateFormat(date){
  return format(date, DATE_FORMAT);
}

function transformTsForInputDate(dateTimeStamp){
  const date =  fromUnixTime(dateTimeStamp);
  return format(date, 'yyyy-MM-dd');
}

function transformDateToInputView(dateTimeStamp){
  const date =  fromUnixTime(dateTimeStamp);
  return format(date, 'dd-MM-yyyy');
}

export {processDate, isBeforeFromNow, getDateStringFromTimeStamp,
        transformDateFormat, transformTsForInputDate,
        transformDateToInputView, DATE_FORMAT};