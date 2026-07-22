import{ EventEmitter } from "node:events";

const task = new EventEmitter();

const sayHi=(name)=> {
 console.log(`Logged In ${name}`); 
};
const starts = () => {
    console.log("System started");
};
task.once("greet",starts);
task.on("greet",sayHi);
task.on("greet",(name) => {
    console.log(``)
})
task.emit("greet","alok yadav");
task.emit("greet","ankur");
