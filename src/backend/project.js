function createProject(tasks){
    tasks

    function addTask(task){
        this.tasks.push(task);
    }

    return {tasks};
}

export default createProject;