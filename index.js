const prompt = require("prompt-sync")();
const {Encaps} = require("./encaps");

const taskManager = new Encaps();

//TODO: Apply email API stuff soon

//for now work on the inputs

function runApp() {
    const selection = prompt("what would you like to do? \n 1. Make new task 2.delete 3. List tasks 4. send tasks (through email): ");
    var running = true;
    if(selection == 1) {
        let task = prompt("enter task name: ");
        taskManager.setTask(task);
        console.log("saved");
    } else if(selection == 2) {
        const deleteSelectedTask = prompt("select the index of the task you wish to delete \n" + taskManager.getTasks() + ": ");
        taskManager.deleteTask(deleteSelectedTask);
        console.log("task deleted");
    } else if(selection == 3) {
       console.log(taskManager.getTasks());
    } else {
        running = false;
    }

    if(running) {
        runApp();
    }
}

runApp();