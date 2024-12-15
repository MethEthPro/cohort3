let count=2;


// delete todo function
// gets the element
// gets the parentnode
// removeschild
// as todos are being decreased
// count gets decreased
function DELETETODO(index){
    count--;
    const del_element=document.getElementById("todo"+index);
    const parent_del_element=del_element.parentNode;
    parent_del_element.removeChild(del_element);

}


// as todo is increasing count increase
// get the input
// create a new div element
// add html content to the new element just like
// we have with other todos, makes sure to insert the variables
// give it a valid id
// get the parentnode
// append the child
// makes sure to clear the input filed for further use
function ADDTODO(){
    count++;
    const inp=document.querySelector("input");
    const new_element=document.createElement('div');
    new_element.innerHTML=`
    ${inp.value}
    <button id="deleteBUTTON${count}" onclick="DELETETODO(${count})">delete</button>

    `;
    new_element.id="todo"+count;
    new_element.className="todo";
    const parent_new_element=document.querySelector("#todos");
    parent_new_element.appendChild(new_element);
    inp.value="";
}

