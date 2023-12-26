function project(name,description){
    name,
    description

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

    return {addTask, getNumberOfTasks, removeTask, name, description};
}

export default project;