import createTask from "./backend/task";
import project from "./backend/project";

const task1 = createTask("Do the dishes", "Wash pots, dishes and cutterly",'12/25/2023',"1");
const task2 = createTask("Vaccum", "Sofa and bed",'01/30/2024',"2");
const task3 = createTask("Cleaning washrooms", "shower and toilet",'01/30/2024',"2");
const task4 = createTask("Complete development", "Complete UTs",'06/16/1985',"2");
const task5 = createTask("Call mom", "Tell her about christmas evening",'12/23/2024',"2");
let tasks = [];
tasks.push(task1);
tasks.push(task2);
console.log('index.js tasks '+tasks.length);
const project1 = project('test1', 'just for testing');
console.log('index.js project: '+project1.getNumberOfTasks());
project1.addTask(task1);
project1.addTask(task2);
console.log('index.js project: '+project1.getNumberOfTasks());
console.log('index.js task1: '+task1.id);
console.log('index.js task1: '+task1.id);

project1.addTask(task3);
project1.addTask(task4);
project1.addTask(task5);

project1.removeTask(task2.id);
console.log('index.js removeTask result: '+project1.getNumberOfTasks());

project1.removeTask(task4.id);
console.log('index.js removeTask result 2: '+project1.getNumberOfTasks());

project1.addTask(task4);
console.log('index.js removeTask result 3: '+project1.getNumberOfTasks());

project1.addTask(task4);
console.log('index js project name and description: '+project1.name + ' - '+ project1.description);