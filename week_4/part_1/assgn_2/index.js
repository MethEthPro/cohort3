const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('TODO')
  .description('CLI TODO , add edit remove tasks')
  .version('0.0.1');
program.command('add')
  .description('we want to add a todo')
  .argument('<todo>', 'todo to add')
  .argument('<time>',"time at which todo is placed")
  .action((todo,time) => {
    const daata={"todo":todo,"time":time};
    try {
        let todos={}
        if(fs.existsSync("todos.json")&&fs.statSync("todos.json").size>0){
            todos=JSON.parse(fs.readFileSync("todos.json","utf-8"))
        }
        todos[todo]=daata;
        fs.writeFileSync("todos.json", JSON.stringify(todos));
        console.log("todo added");
      } 
    catch (err) {
        console.error("Error:", err.message);
    }
      
    
  });

program.command('delete')
  .description('we want to delete a todo')
  .argument('<todo>', 'todo to delete')
  .action((todo) => {
    try {
        let todos={}
        if(fs.existsSync("todos.json")){
            todos=JSON.parse(fs.readFileSync("todos.json","utf-8"))
        }
        try{
            delete todos[todo];
            fs.writeFileSync("todos.json", JSON.stringify(todos));
            console.log("todo deleted");
        }
        catch(err){
            console.error("Error: ","the todo does not exits");
        }
        
      } 
    catch (err) {
        console.error("Error:", err.message);
    }
      
    
  });  


program.command('edit')
  .description('we want to edit a todo')
  .argument('<todo>', 'todo to edit')
  .argument('<newtodo>','new todo in place of old one')
  .argument('<newtime>',"new time for new todo")
  .action((todo,newtodo,newtime) => {
    const daata={"todo":newtodo,"time":newtime};
    try {
        let todos={}
        if(fs.existsSync("todos.json")){
            todos=JSON.parse(fs.readFileSync("todos.json","utf-8"))
        }
        try{
            delete todos[todo];
            todos[newtodo]=daata;
            fs.writeFileSync("todos.json", JSON.stringify(todos));
            console.log("todo edited");
        }
        catch(err){
            console.error("Error: ","the todo does not exits");
        }
        
      } 
    catch (err) {
        console.error("Error:", err.message);
    }
      
    
  });    

program.parse();