let idArea=document.getElementById('idArea');
let idMes=document.getElementById('idMes');
let pwArea=document.getElementById('pwArea');
let pwMes=document.getElementById('pwMes');
let pwArea1=document.getElementById('pwArea1');
let pwMes1=document.getElementById('pwMes1');
let nameArea=document.getElementById('nameArea');
let nameMes=document.getElementById('nameMes');

let reqid=/^[a-zA-Z0-9]{4,}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

idArea.addEventListener('blur',function(){
    if(reqid.test(idArea.value)){
        idMes.style.color='green';
        idMes.innerHTML="사용가능한 아이디 입니다"
    }else{
        idMes.style.color='red';
        idMes.innerHTML="아이디는 영문대소문자, 숫자 포함 4글자 이상 가능"
    }
})

pwArea.addEventListener('blur',function(){
    if(passwordRegex.test(pwArea.value)){
        pwMes.style.color='green';
        pwMes.innerHTML="사용가능한 패스워드 입니다"
    }else{
        pwMes.style.color='red';
        pwMes.innerHTML="패스워드는 영문대소문자, 숫자 포함 8글자 이상 가능"
    }
})

pwArea1.addEventListener('blur',function(){
    if(pwArea.value===pwArea1.value){
        pwMes1.style.color='green';
        pwMes1.innerHTML="비밀번호가 일치합니다"
    }else{
        if((pwArea.value==="")&&(pwArea1.value==="")){
            pwArea.focus()
            
        }else{
            pwMes1.style.color='red';
            pwMes1.innerHTML="일치하지 않아요"
        }
    }
})