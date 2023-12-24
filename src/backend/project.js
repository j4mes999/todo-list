function project(tasks){
    tasks

    const addTask = (task) => {
        //TODO test this method
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
                console.log('task was found with id: '+taskId);
                break;
            }
            index++;
        }
    }

    return {addTask, getNumberOfTasks, removeTask};
}

export default project;