function addTodo(){
    let newtodo=document.querySelector("input");
    console.log(newtodo.value);
}

// to fwtch elements you can use
// querySelector or querySelecotrAll
console.log(document);
let title=document.querySelector("h1");
console.log(title.innerHTML);
let all_todo=document.querySelectorAll("h4");
console.log(all_todo[1].innerHTML);
let input = document.querySelector("input");
console.log(input.value);

// getting from id
let first_todo=document.querySelector("#todo1");
console.log(first_todo);

// getting from class
let all_todos=document.querySelectorAll(".todo");
console.log(all_todos);





// updating elements


// we use innerHTML to update elements


// here we are just using setInrerval to run a 
// counter , that uodates the value of our second h4 tag
let counter=0;
setInterval(() => {
    document.querySelectorAll("h4")[1].innerHTML=counter;
    counter++;
}, 1000);


// next is how to delete elements 
// to learn that go to index2.html
// and also index3.html

// then after that we have how to add elements
// go to add.html