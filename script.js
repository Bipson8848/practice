let score=document.querySelector('.score');
let user=document.querySelector('.user-guess');
let arr=['rock','paper','scissors'];
let comp=document.querySelector(".dic");
let arr2=['fa-hand-back-fist','fa-hand','fa-hand-scissors']

user.addEventListener('click',function(element){
    let rand=Math.floor(Math.random()*3);
    let index=element.target.parentElement.dataset.value;
    console.log(index)
    generateResult(index,rand);
})

function generateResult(userguess,rand){
    console.log(userguess,rand);
    if(userguess==rand){
        comp.innerHTML=`<i class="fa-solid ${arr2[rand]}"></i>`;
        score.innerHTML="Drawwwwwwwwwwwwwwwwwwwwwwwwww";
    }else if((userguess==0 && rand==2)){
        comp.innerHTML=`<i class="fa-solid ${arr2[rand]}"></i>`;
        score.innerHTML=`You wonnnn computer chooses ${arr[rand]}`;
    }else if((userguess==2 && rand==0)){
        comp.innerHTML=`<i class="fa-solid ${arr2[rand]}"></i>`;
        score.innerHTML=`You loose computer chooses ${arr[rand]}`;
    }
    else if(rand>userguess){
        comp.innerHTML=`<i class="fa-solid ${arr2[rand]}"></i>`;
        score.innerHTML=`you loseee :( computer chooses ${arr[rand]}`;
        comp.innerHTML=`<i class="fa-solid ${arr2[rand]}"></i>`;
    }else{
        comp.innerHTML=`<i class="fa-solid ${arr2[rand]}"></i>`;
        score.innerHTML=`you wonnnn :)))) computer chooses ${arr[rand]}`;

    }
}
