// let a=10
// const b=20
// var c=30

if(true){
    let a=100
    const b=200
    var c=300
}
// console.log(a);
// console.log(b);
// console.log(c);

// Scope level and mini hoisting
function one(){
    const username="Kunal"

    function two(){
        const website ="youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username="kunal"
    if(username==="kunal"){
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);
    
}

// console.log(username);

// **********Interesting
function addone(num1){
    return num1+1
}

console.log(addone(5));

// Expression
// console.log(addTwo(4));

const addTwo=function(num){
    return num+2
}

console.log(addTwo(3));

