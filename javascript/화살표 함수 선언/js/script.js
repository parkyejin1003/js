//es5
var pow=function(x){
    return x * x
}
console.log(pow(10))

//es6
const pow1= x => x*x //함수 몸체가 한줄의 구문이면 중괄호 생략할 수 있으며 암묵적으로 return없이 사용
console.log(pow(2))

//매개변수 없는 경우
const pow2=()=>{}

//매개변수 하나가 있는 경우
const pow3= a =>{}

//매개변수 여러개가 있는 경우 소괄호 생략하면 안됨
const pow4= (a,b) =>{}
const pow5= () =>{
    const x=10;
    return x * x
}

//this
function Prefixer(prefix){
    this.prefix=prefix
}
Prefixer.prototype.prefixArray = function (arr) {
  // (A)
  var that=this;
  return arr.map(function (x) {
    return that.prefix + ' ' + x; // (B)
  }, this);
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));