// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//{
    console.log(null >0)
    console.log(null == 0)
    console.log(null>=0)
    /*
    The reason why null behaves this way is that when comparing null with a number, JavaScript converts null to 0.
    The reason is that an equality check == and comparisons > < >= 
    <= work differently .
    Comparisons convert null to a number,treating it as 0.
    That's why null >=0 is true and null >0 is false.
    */

    console.log(undefined >0)
    console.log(undefined == 0)
    console.log(undefined>=0)
    //But here the comparisons for the undefined value always returns false.
//   } Avoid doing these comparisons in your code cause javascript has some inconsistent behavior here.
//Absolute Check [==]
//(Strict Check) [===]
//In the strict check the datatype is been checked
console.log("2" === 2);