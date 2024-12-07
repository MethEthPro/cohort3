var nam="sarthak";
nam=12;
nam=true;
console.log(nam);
const height = 185;
let favColor = "BLUE";
let likePizza = true;
console.log(height);
console.log(favColor);
console.log(likePizza);
const sum = 10+20;
const isTrue=(12===12);
const value=(true&&false);
console.log(sum);
console.log(isTrue);
console.log(value);
// function declaration
function greet(name){
    return "hello "+name;
}
let message = greet("sarthak");
console.log(message);
function addition(num1,num2){
    return num1+num2;
}
let mySum = addition("sarthak",12);
console.log(mySum); 

function canVote(age){
    return age>18;
}
let myVote=canVote(16);
console.log(myVote);

function isEven(num){
    if(num%2===0){
        console.log("the number is even");
    }
    else{
        console.log("the number is odd");
    }
    return;
}
isEven(11);

// for loop 
for(let i=0;i<5;i++){
    console.log(i);
}

// while loop
let j = 0;
while(j<5){
    console.log(j);
    j++;
}

function findSum(number){
    let sum=0;
    for(let i=1;i<=number;i++){
        sum = sum + i;
    }
    console.log(sum);
}
findSum(5);
// this is what is called an object
// this is just like a dictionary in python
// just like in python we have nested dictionaries
// similarly we can have nested objects too 
user={
    firstName:"sarthak",
    lastName:"ahuja",
    user2:{
        firstName:"ayush",
        lastName:"raj",
        age:20
    },
    age:25
}
console.log(user.firstName);
console.log(user['lastName']);
console.log(user.user2.age);
console.log(user["user2"]["firstName"]);
userr={
    namee:"SARTHAK AHUJA",
    age:19,
    gender:"MALE",
}
function greetME(user_profile){
    console.log("greetings "+user_profile.namee+" of age "+user_profile.age);
}
greetME(userr);

// ASSIGNMENT 2+3 OF OBJECTS
function greetMEE(user_profile){
    gender_map={
        MALE:"Mr",
        FEMALE:"Mrs",
        OTHERS:"Others"
    }

    console.log("greetings "+gender_map[user_profile.gender]+" "+user_profile.namee+" of age "+user_profile.age);
    if(user_profile.age>18){
        console.log("you can vote");
    }
    else{
        console.log("you cannot vote");
    }
}

greetMEE(userr);


// arrays
// its elements can be of different data types too 
const arrrrr=["sarthak","ahuja",20,true];
console.log(arrrrr);

// arrays assignment 
// USE OF FILTERS 
function returnEVENarrayELEMENTS(my_element){
    return my_element%2==0;
}
const my_array=[12,115,12,133,14,19.6];
const result = my_array.filter(returnEVENarrayELEMENTS);
console.log(result);

// array of objects
// we have objects as elements inside an array
const my_new_array=[
    {
        firstname:"sarthak",
        lastname:"ahuja"
    },
    {
        date:17,
        month:8,
        year:2005
    },
    "sarthak ahuja",
    12
]
console.log(my_new_array[0]['firstname']);
console.log(my_new_array[1]['year']);
console.log(my_new_array[2]);
console.log(my_new_array[3]);


// ARRAYS OF OBJECTS ASSIGNMENT 
const MY_USERS=[
    {
        username:"sarthak",
        age:20,
        gender:"female"
    },
    {
        username:"ayush",
        age:12,
        gender:"male"
    },
    {
        username:"gourav",
        age:21,
        gender:"male"
    }
]

function meraFUNCTION(array_element){
    return array_element['age']>18 && array_element['gender']==="male";
}

const MY_NEW_USERS = MY_USERS.filter(meraFUNCTION);
console.log(MY_NEW_USERS);