let btnCollapse=document.getElementById('btn-collapse');
let headeing=document.getElementsByClassName('panel-heading');
let body=document.getElementsByClassName('panel-body');
let question=document.getElementsByClassName('panel-question');

for(let i=0; i<headeing.length; i++){ //heading들 마다 할일
    headeing[i].addEventListener('click', function(e){
        for(let j=0; j<question.length; j++){
            question[j].classList.remove('active');
            e.target.parentNode.classList.add('active')
            activebody()
        }
    })
}

function activebody(){
    for(let k=0;k<body.length; k++){
        body[k].style.display='none'
    }
    let activePanel=document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display='block'
}
activebody()
btnCollapse.addEventListener('click', function(){
    for(let k=0;k<body.length; k++){
        body[k].style.display='none'
    }
})