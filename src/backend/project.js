import createId from "./utils/id";

function createProject(name,description,projectId){
    name,
    description

    const id = projectId != null ? projectId : createId();
    let tasks = [];

    const addTask = (task) => {
        tasks.some((e) => e.id === task.id) ? 
        console.log('Cannot add a task with same ID') : 
        tasks.push(task);
    }

    const getNumberOfTasks = () => {
        return tasks.length;
    }

    const removeTask = (taskId) => {
        let index = 0;
        for( const task of tasks){
            if(task.id === taskId){
                tasks.splice(index,1);
                break;
            }
            index++;
        }
    }

    const getTask = (taskId) => {
        return tasks.find(task => task.id === taskId);
    }

    const getTasks = () => {
        return tasks;
    }

    const replaceTask = (taskTobeReplaced, newTask) => {
        const index = tasks.findIndex( t => t.id == taskTobeReplaced.id);
        return tasks.splice(index,1,newTask);
    }

    

    return {addTask, getNumberOfTasks, removeTask, getTasks, getTask, replaceTask, name, description, id};
}

export default createProject;