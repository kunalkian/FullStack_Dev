const accountId=12344
let accountEmail="kunal@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2345 // we cannot change the value of accountId because it is declared using const

accountEmail="hc@hc.com"
accountPassword="67890"
accountCity="Delhi"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope 
and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])