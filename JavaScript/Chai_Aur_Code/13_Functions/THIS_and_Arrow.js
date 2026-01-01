// Prequistes
const user={
    username:"Kunal",
    price:900,
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);          
    }
}

// user.welcomeMessage();
// user.username="Sam"
// user.welcomeMessage();

console.log(this);

// Functions
// function coffee(){
//     let username="kunal"
//     console.log(this);
// }
// const coffee=function(){
//     let username="kunal"
//     console.log(this.username);
// }
const coffee=()=>{
    let username="kunal"
    console.log(this.username);
}

coffee()

// Arrow Function
// const addTwo=()=>{}

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//Implicit return
// const addTwo=(num1,num2)=>num1+num2
const addTwo=(num1,num2)=>({username:"Kunal"})
console.log(addTwo());

