// Immediately Invoked Function Expressions(IIFE)
(function coffee(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
((name)=>{
    // named IIFE
    console.log(`Two DB CONNECTED`);
})('kunal')

