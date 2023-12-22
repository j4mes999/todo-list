import createTask from "./backend/task";
import createProject from "./backend/project";

const task1 = createTask("Do the dishes", "Wash pots, dishes and cutterly",'09/30/2024',"1");
const task2 = createTask("Vaccum", "Sofa and bed",'01/30/2024',"2");
let tasks = [];
tasks.push(task1);
tasks.push(task2);
console.log('index.js tasks '+tasks.length);
const project = createProject(tasks);
console.log('index.js project: '+project.tasks.length);
project.tasks.push(task1);
console.log('index.js project: '+project.tasks.length);