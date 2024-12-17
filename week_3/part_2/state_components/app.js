// STATE,COMPONENTS AND RENDER
// State - The variable parts of an app.
// Components - How to render  state on screen.
// Rendering - Taking the state and rendering it on the DOM based on the components



const todos=[];

// we are looking for a structure 
//like todos=[{
//     id:1,
//     description:"play fifa smoke shisha"
//  },
//  {
//     id:2,
//     description:"study "
//  }]

// learn how to use splice method before trying to understand this



// these all functions do something with our state

function addTODO(){
    let element=document.querySelector("input");
    todos.splice(todos.length,0,{"id":"","description":element.value});
    // we add element at the end of our list , with the data specified
    element.value='';
    render();
}

function deleteLASTtodo(){
    todos.splice(-1,1);
    // we delete the last todo of our array
    render();
}

function deleteFIRSTtodo(){
    // we delete the first todo of our array
    todos.splice(0,1);
    render();
}

function deleteTODO(id){
    // we delete a specific todo
    todos.splice(id-1,1);
    render();

}


// this tells us how to render the state on screen
// this returns us a div
function createTODOcomponent(todo,count){
    let h1tag = document.createElement("h1");
    let button = document.createElement("button");
    let div = document.createElement("div");
    todo['id']=count;
    h1tag.innerHTML=todo['id'] + " "+todo['description'];
    button.innerHTML="delete";
    // important
    button.setAttribute("onclick",`deleteTODO(${count})`);
    div.appendChild(h1tag);
    div.appendChild(button);
    return div
}


// important 
// we first clear the parent div containing all the todos
// then we add each todo according to the component structure
//  i hope you remember how to use forEach

function render(){
    let parentelement=document.querySelector("#todos");
    parentelement.innerHTML="";
    let count=0;
    todos.forEach(element => {  
        count++;
        let todo=createTODOcomponent(element,count);
        // we get a div we append to the parent element
        parentelement.appendChild(todo);
        
    });
}