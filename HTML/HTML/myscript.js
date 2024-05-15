
//four types of writing code in java
document.write("<b>hello world <br><br></b>");
//alert("hi hello hey bye");
/*document.getElementById("h").innerHTML = "vishwajeet";*/
console.log("hello!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//seen on the console not on the page

var a;
a=5;
document.write(a);

var b; b=6568456; document.write(b);//we also write in this way but generally we are not write in this way


var digit1 = 5;
alert(digit1);


var z =  digit1 + b;
console.log(z);
alert(z);


let c = "hi";
console.log(c);

const d = 123445565;
console.log(d);
// we cannot change the value of const because it is fixed
// the value of var and let can be easily changed


let x=5 // java convert number to string to perform addition operation
y="jhon";
alert(x+y);
let g = 10;// = is assignment operator
let t =3;
//if we want to check any variablethat it is in a another variable then we use == 
//example  
g == t;
g = t; // this is assignment operator



a = 23;
a=a+1;
console.log(a);
//we also write a=a+1 as a++ 
a++;
console.log(a);
a--;
console.log(a);


//we can change the datatype of variable in javascript . 

let X= 'hel"lo ';
let Y="hel'lo";
let f="hel\"lo";
console.log(X,Y,f);


let q =4>6;//boolean datatype..........
console.log(q);

let w=["vish","tom","jhon"]; // array datatype........
console.log(w);

// let nam = {name:"tom", age:50}; // object : a type of datatype
// consaole.log(nam);

/*let k = typeof 10;
console.log(k);

let j = "hello";
console.log(typeof j);

let m = ("hello hi bbhhwjb");
alert(`hello ${m}`);// `` this sign also work as a quotes for string . but ${x} not work in single and double quotes
alert("hello" + m);*/


// how to check conditions in java
/*let age = 12;

if (age>=14){
alert("you can vote!");// if there is only one line then we can write a code without curly brackets{}
}else{
    alert("you cannot vote!");
}*/



// to check two conditions
/*let ages = 15;
let hasvotercard = "yes";


if (age>=14 && hasvotercard == "yes"){
    alert("you can vote!");
    }else{
        alert("you cannot vote!");
    }*/


// to check three conditions



    
// nested if else.........
/*let Ages1 = 15;
let Hasvotercard1 = "no";


if (Ages1>=14){
     if(Hasvotercard1 == "yes"){

    alert("you can vote!");

    }else{
        alert("get your voter id card");}

    }else{

        alert("you cannot vote!");

    }*/


// to check login ( if 0 loggedout .,  if 1 login)    
let isloggedin = 0;

if(isloggedin == 1){
    console.log("login");
}else{
    console.log("logout");
}


//turnary operator 

let option = isloggedin == 1? "logout" : "login";
//    condition          print when true   , when false
console.log(option);



// nullish coalescing operator:
let user;

// user = " hello vishu";
alert(user ?? " guest user");//?? this is used to remove undefined or null value


//switch in javascript
//problem : if input = 1, "y" output = continue....
// if input = 0 , "n", "no" output = end ...
let input;

input = "";

if(input === 1){
          console.log("");
}else if(){

}else if(){

}else if(){

}else if(){

}else if(){

}else {

}













