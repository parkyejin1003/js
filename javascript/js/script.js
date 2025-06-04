let age=25;
console.log(typeof age);

let name='현현';
console.log(typeof name);

let isAdult=true;
console.log(typeof isAdult);

let colors=["red","blue"];//array
console.log(typeof colors);

let user={name:"현현", age: 25};
console.log(typeof user);



/* let x; // 값이 없음
x=10;
console.log(x) */
console.log(x)
var x=10;
console.log(x)
let nothing=null;//값이 없음
console.log(typeof nothing);


let y=5;
console.log(y);

//문자와 변수 연결
const char="c";
const brendan='brendan';
const greeting='hello'+ brendan;
console.log(greeting);
console.log(`value: ${greeting}, type: ${typeof greeting} `)

//연산자 operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multply
console.log(5%2); //remainder
console.log(2**3); //exponentiation

//증감 연산자
let counter=2;
console.log(counter)
counter--;
console.log(counter) 

//할당 연산자
let z=3;
let a=6;
z += a //z=z+a
console.log(z)
z -= a // z= z-a
console.log(z)
z *= a 
console.log(z)
z /= a
console.log(z)

//비교 연산자
console.log(10<6); //false
console.log(10<=6); //false
console.log(10>6); //true


//or ||, and &&, not !
const value1=false;
const value2=4<2;

console.log(`or:${value1 && value2 && check()}`);
function check(){
    for(let i=0; i<10; i++){
        console.log("오예")
    }
    return true;
}

//!(not)
console.log(!value1);

//7.Equality(같다)
const stringFive='5';
const numberFive=5;
console.log(stringFive==numberFive)

//object equality by reference
const hyun1={name:'hyun'};
const hyun2={name:'hyun'};
const hyun3=hyun1;
console.log(hyun1==hyun2);//false
console.log(hyun1===hyun2);//false
console.log(hyun1===hyun3);//true