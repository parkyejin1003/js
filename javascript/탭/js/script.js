let targetLink=document.querySelectorAll('.tabmenu a');
let targetContent=document.querySelectorAll('#tabContent>div');

for(let i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener('click',function(e){
        let orgTarget=e.target.getAttribute('href');
        //console.log(orgTarget)

        let tabTarget=orgTarget.replace('#', "");
        for(let k=0; k<targetContent.length; k++){
            targetContent[k].style.display="none"
        };
        document.getElementById(tabTarget).style.display='block';
        for(let i=0; i<targetLink.length; i++){
            targetLink[i].classList.remove('active');
            e.target.classList.add('active')
        }
    })
}