import processDate from "./utils/date";

function createTask( title, description, dueDate, priority){
    title,
    description,
    dueDate = validateDate(),
    priority
    
    function validateDate(){
        this.dueDate = processDate(dueDate);
    }


    return {title, description, dueDate, priority};
}

export default createTask;