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

console.log(loginUserMessage());

// console.log(loginUserMessage("Kunal"))