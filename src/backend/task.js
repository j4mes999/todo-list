import {processDate,isBeforeFromNow} from "./utils/date";
import createId from "./utils/id";

function createTask( title, description, dueDate, priority, taskId, project){
    title,
    description,
    dueDate =  validateDate(dueDate),
    priority

    const generateId = () => {
        return createId();
    }

    const id = taskId != null ? taskId : generateId();

    function validateDate(date){
        if(date.length == 0){
            return '';
        }else if(isBeforeFromNow(date)){
            console.warn('Due date cannot be before today\'s  date');
            return ''
        }

        return processDate(date);
        
    }

    const projectId = project;


    return {title, description, dueDate, priority, id, projectId};
}

export default createTask;