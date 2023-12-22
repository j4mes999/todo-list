import processDate from "./utils/date";

function createTask( title, description, dueDate, priority){
    title,
    description,
    dueDate =  processDate(dueDate),
    priority

    return {title, description, dueDate, priority};
}

export default createTask;