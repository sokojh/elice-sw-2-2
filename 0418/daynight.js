export function night(){
    document.querySelector('body').style.backgroundColor='black'
//    $('body').css('background-color','black').css('color','white');
    document.querySelector('body').style.color='white'
//    $('body').css('color','white');
    document.querySelector('#darkmodebtn').value='day'
    document.querySelector(this).style='background-color: black;'
    let as = document.querySelectorAll('a');
    for(let i=0;i<as.length;i++){
        as[i].style.color='white'
    }
    // $('a').css('color','white');
}
export function day(){
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('body').style.color='black';
    document.querySelector('#darkmodebtn').value='night';
    document.querySelector(this).style.backgroundColor='white';
    document.querySelectorAll('a').style.color='blue';
    let as = document.querySelectorAll('a');
    for(let i=0;i<as.length;i++){
        as[i].style.color='blue'
    }
    // $('a').css('color','black')
}
export function dayNight(mode){
if(mode==='night'){
    night();
    
}else{
    day();
}
}
class TestClass{
    constructor(){
        this.name ="";
        this.age=0;
    }
    setName(){
        this.name="Hello!"
        console.log(this.name);
    }
    setAge(){
        this.age=35;
        console.log(this.age);
    }
}
let test = new TestClass();
test.setName