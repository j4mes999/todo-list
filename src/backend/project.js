import createId from "./utils/id";

function createProject(name,description){
    name,
    description

    const id = createId();
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

    const getTasks = () => {
        return tasks;
    }

    

    return {addTask, getNumberOfTasks, removeTask, getTasks, name, description, id};
}

export default createProject;