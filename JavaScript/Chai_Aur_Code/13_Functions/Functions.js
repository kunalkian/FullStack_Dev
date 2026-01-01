// PART 1
//Taking parameters in functions

function saymyname(){
    console.log("K")
    console.log("u")
    console.log("n")
    console.log("a")
    console.log("l")
}

// saymyname()//function call

// saymyname//reference of the function

// function addTwoNumbers(){
//     console.log(3+5);    
// }

// addTwoNumbers()

function addtwonumber(num1,num2)
{
    let result=num1+num2
    return result
}

const result=addtwonumber(3,5)
// console.log("Result:",result);

function loginUserMessage(username)
{
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kunal"));

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

// console.log(loginUserMessage("Kunal"))

// PART 2

function calculateCartPrice(val1,val2,...num1)
{
    return num1
}

console.log(calculateCartPrice(1000,400,200,2000));

const user={
    username: "Kunal",
    price: 4000
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"sam",
    price:2000
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000,2000,3000,4000]));