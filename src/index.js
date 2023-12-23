import createTask from "./backend/task";
import project from "./backend/project";

const task1 = createTask("Do the dishes", "Wash pots, dishes and cutterly",'09/30/2024',"1");
const task2 = createTask("Vaccum", "Sofa and bed",'01/30/2024',"2");
let tasks = [];
tasks.push(task1);
tasks.push(task2);
console.log('index.js tasks '+tasks.length);
const project1 = project(tasks);
console.log('index.js project: '+project1.getNumberOfTasks());
project1.addTask(task1);
project1.addTask(task2);
console.log('index.js project: '+project1.getNumberOfTasks());
console.log('index.js task1: '+task1.id);
console.log('index.js task1: '+task1.id);
console.log('index.js task1: '+task1.id);
console.log('index.js task1: '+task2.id);
console.log('index.js task1: '+task2.id);