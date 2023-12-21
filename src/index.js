import createTask from "./backend/task";

console.log("hello with webpack dev server");
const task1 = createTask("Do the dishes", "Wash pots, dishes and cutterly","Dic 10","1");
console.log("task desc: " + task1.description);