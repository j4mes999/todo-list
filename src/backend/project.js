function project(tasks){
    tasks

    const addTask = (task) => {
        tasks.push(task);
    }

    const getNumberOfTasks = () => {
        return tasks.length;
    }

    const removeTask = (taskId) => {
        //TODO pending to implement
    }

    return {addTask, getNumberOfTasks};
}

export default project;