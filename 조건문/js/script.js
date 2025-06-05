const name='hyun'; //변수 name에 hyun을 대입
if(name==='hyun'){// 만약에 name에 hyun 있으면  참이면
   console.log('Welcome, huyun');
}else if(name==='coder'){//만약에 name에 coder
   console.log('You are amazing coder');
}else{
   console.log('unKwnon');
}

console.log(name ==='hyun' ? 'yes':'no');


const browser = 'Chrome';
switch (browser){
   case 'IE':
   console.log('go away!');
   break;
   case 'Chrome':
   console.log('love you!');
   break;
   case 'firefox':
   console.log('love you!');
   break;
   default:
   console.log('same all!');
   break;
}

let i=3;
/* while(i>0){
   console.log(`while:${i}`);
   i--;
} */

do{
   console.log(`while:${i}`);
   i--;
   
}while(i<0);

for(i=10; i>0; i--){
      console.log(`for:${i}`);
}

//nested loops 중첩
for(let i=0; i<10; i++){
   for(let j=0; j<10; j++){
      console.log(`i:${i},j:${j}`);
   }
}

// 구구단 1단부터 9단까지 출력하는 자바스크립트 코드

for (let dan = 1; dan <= 9; dan++) {
  console.log(`📌 ${dan}단`);
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
  console.log(''); // 줄 바꿈
}

for(let i =0; i<11; i++){
      if(i%2 !==0){
         continue;
      }
   console.log(`q1.${i}`);
}
for(let i =0; i<11; i++){
   if(i%2 ===0){
      console.log(`q1.${i}`);
   }
}   

for(let i =0; i<11; i++){
   if(i>8){
      break;
   }
   console.log(`q2.${i}`);
}   