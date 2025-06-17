let idArea=document.getElementById('idArea');
let idMes=document.getElementById('idMes');
let pwArea=document.getElementById('pwArea');
let pwMes=document.getElementById('pwMes');
let pwArea1=document.getElementById('pwArea1');
let pwMes1=document.getElementById('pwMes1');
let nameArea=document.getElementById('nameArea');
let nameMes=document.getElementById('nameMes');
let phoneArea=document.getElementById('phoneArea');
let phoneMes=document.getElementById('phoneMes');
let emailArea=document.getElementById('emailArea');
let emailMes=document.getElementById('emailMes');
let bornArea=document.getElementById('bornArea');
let bornMes=document.getElementById('bornMes');

let reqid=/^[a-zA-Z0-9]{4,}$/
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const nameRegex = /^([A-Z][a-z]{1,19}|[가-힣]{2,5})$/;
const phoneRegex = /^01[016789]-\d{3,4}-\d{4}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const bornRegex = /^(19[0-9]{2}|20[0-9]{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;



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
    if((pwArea.value==="")&&(pwArea1.value==="")){
         pwArea.focus()
    }else{
       if( pwArea.value===pwArea1.value  ){
            pwMes1.style.color='green';
            pwMes1.innerHTML="비밀번호가 일치합니다."
       }else{
            pwMes1.style.color='red';
            pwMes1.innerHTML="패스워드가 일지 하지 않습니다"
       }
    }
})

nameArea.addEventListener('blur', function(){
    if(nameRegex.test(nameArea.value)){
        nameMes.style.color='green';
        nameMes.innerHTML='올바른 입력입니다'
    }else{
        nameMes.innerHTML='이름을 입력해주세요'
        nameMes.style.color='red';
        nameArea.value="";
        nameArea.focus();
    }
})
phoneArea.addEventListener('blur', function(){
    if(phoneRegex.test(phoneArea.value)){
        phoneMes.style.color='green';
        phoneMes.innerHTML='올바른 입력입니다'
    }else{
        phoneMes.innerHTML='하이픈 넣어서 입력해주세요'
        phoneMes.style.color='red';
        phoneArea.value="";
        phoneArea.focus();
    }
})
emailArea.addEventListener('blur', function(){
    if(emailRegex.test(emailArea.value)){
        emailMes.style.color='green';
        emailMes.innerHTML='올바른 입력입니다'
    }else{
        emailMes.innerHTML='사용할수 없는 이메일 입니다. 다시 입력해주세요'
        emailMes.style.color='red';
        emailArea.value="";
        emailArea.focus();
    }
})
bornArea.addEventListener('blur', function(){
    if(bornRegex.test(bornArea.value)){
        bornMes.style.color='green';
        bornMes.innerHTML='올바른 입력입니다'
    }else{
        bornMes.innerHTML='잘못된 생년월일입니다'
        bornMes.style.color='red';
        bornArea.value="";
        bornArea.focus();
    }
})

document.getElementById('submit').onclick=function(e){
    e.preventDefault();
    if(idArea.value==""){
        alert("아이디를 입력해주세요");
        return false;
    }else{
        if(!reqid.test(idArea.value)){
            alert('아이디는 대소문자, 숫자 포함 4글자 이상만 가능');
            idArea.value="";
            return false;
        }else{
            if(pwArea.value==""){
                alert("비밀번호 입력해주세요");
                return false;
            }else{
                if(pwArea.value !=pwArea1.value){
                    alert("비밀번호가 일치하지 않습니다");
                    return false;
                }else{
                    if(nameArea.value==""){
                        alert("이름을 입력해주세요");
                        return false;
                    }else{
                        location.href='login.html'
                    }
                }
            }
        }
    }
}