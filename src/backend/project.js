function createProject(tasks){
    this.tasks = tasks;

    function addTask(task){
        this.tasks.push(task);
    }
}