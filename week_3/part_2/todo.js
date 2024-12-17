// same as our previous todo application but 
// we also added some alerts
// and instead of adding everything in plain simple html
// we will first make a span element which will have the
// input text value
// then we will make a button element which will have the button
// then we will append these 2 as childs to a divelement
// and then append divelement as a child to the div tag with 
// id todos

let count=2;
function deleteTODO(index){
    alert("deleteing a todo");
    let del_element=document.getElementById("todo"+index);
    let par_del_element=document.getElementById("todos");
    par_del_element.removeChild(del_element);
    count--;
}

function addTODO(){
    alert("adding a todo");
    count++;
    let inp_element=document.querySelector("input");
    // creating a span to hold input text
    let span_element=document.createElement("span");
    // creating a button
    let button_element=document.createElement("button");
    // giving appropriate values to the lements
    span_element.innerHTML=count+" "+inp_element.value;
    button_element.id='button'+count;

    // important 
    // button_element.onclick=`deleteTODO(${count})`;
    // wont work
    // so we use setAttribute instead
    button_element.setAttribute("onclick",`deleteTODO(${count})`);
    button_element.innerHTML="delete";
    // creating a div element which will have span and button as its child

    let div_element=document.createElement("div");
    div_element.id="todo"+count;
    div_element.appendChild(span_element);
    div_element.appendChild(button_element);
    
    // getting the parent element , to which the div will be child

    let par_add_element=document.getElementById("todos");
    par_add_element.appendChild(div_element);
    inp_element.value='';
}   