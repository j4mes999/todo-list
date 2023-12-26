function createId(){
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
    //TODO use this implementation in task and project.
}

export default createId;