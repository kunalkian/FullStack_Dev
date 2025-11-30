// PART ONE

// Singleton
// Object.create

//Object Literals

const mySym=Symbol("Key1")

const JsUser={
    name:"Kunal",
    "full name": "Kunal Kumar",
    [mySym] : "mykey1",
    location:"Jaipur",
    email:"kunal@gmail",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(mySym);

JsUser.email="kunal@chat.com"
// Object.freeze(JsUser)

JsUser.email="kunal@cat.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");    
}
JsUser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);    
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// PART TWO

// const tinderUser= new Object() or {}
// iss dono mai se koi bhi ek use kar sakte hai empty object hi dikhaye ga
const tinderUser={}

tinderUser.id="123kk"
tinderUser.name="Kunal"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"rand@gmail.com",
    fullname: {
        username:{
            firstname:"ritik",
            lastname:"jha"
        }
    }
}
console.log(regularUser.fullname.username.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

// const obj4={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2}
console.log(obj4);

const users=[
    {
        id:1,
        email:"user1@example.com"
    },
    {
        id:2,
        email:"user2@example.com"
    },
    {
        id:3,
        email:"user3@example.com"
    }
]

users[1].email
console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename:"Cooking JavaScript",
    price: "Free",
    courseInstructor:"Kunal"
}

const {courseInstructor:instructor}=course
console.log(instructor);


