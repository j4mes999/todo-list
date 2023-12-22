import createTask from "./backend/task";
import { fromUnixTime } from "date-fns";

console.log("hello with webpack dev server");
const task1 = createTask("Do the dishes", "Wash pots, dishes and cutterly","10/20/2024","1");
console.log("task desc: " + task1.description);
console.log('index.js Date: '+fromUnixTime(task1.dueDate));
