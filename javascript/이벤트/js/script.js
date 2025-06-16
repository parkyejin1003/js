let btn=document.getElementById('submit'),
container=document.querySelector('.container');

btn.addEventListener('click', function(){
    btn.style.color='red';
    console.log('버튼이 클릭되었습니다')
})

container.addEventListener('mouseenter', function(){
    this.style.background='red';
})

container.addEventListener('mouseleave', function() {
    this.style.background = ''; // 기본값으로 되돌림
});

window.addEventListener('keydown', function(event){
    console.log(event.key)
})