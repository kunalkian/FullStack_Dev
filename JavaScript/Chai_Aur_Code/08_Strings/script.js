const name="kunal"
const repoCount=50

// For concatenation
// console.log(name+repoCount+ " Value"); //But not recommended for nowadays

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//Recommended

const naam= new String('kunal-Welcome')

// console.log(naam[0]);
// console.log(naam.__proto__);

// console.log(naam.length);
// console.log(naam.toUpperCase());
// console.log(naam.charAt(2));
// console.log(naam.indexOf('W'));

// const newString= naam.substring(0,4)
// console.log(newString);

const anotherString=naam.slice(-8,6)
console.log(anotherString);

const newStringOne="  kunal  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://kunal.com/kunal%20k"
console.log(url.replace('%20','-'));

console.log(url.includes('miss'));

console.log(naam.split('-'));