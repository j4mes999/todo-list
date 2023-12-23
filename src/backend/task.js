import processDate from "./utils/date";

function createTask( title, description, dueDate, priority){
    title,
    description,
    dueDate =  processDate(dueDate),
    priority

    const generateId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    }

    const id = generateId();

    return {title, description, dueDate, priority,id};
}

export default createTask;