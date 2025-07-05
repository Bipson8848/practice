let score=document.querySelector('.score');
let user=document.querySelector('.user-guess');
let arr=['rock','paper','scissors'];

user.addEventListener('click',function(element){
    let rand=Math.floor(Math.random()*3);
    let index=element.target.parentElement.dataset.value;
    console.log(index)
    generateResult(index,rand);
})

function generateResult(userguess,rand){
    console.log(userguess,rand);
    if(userguess==rand){
        score.innerHTML="Drawwwwwwwwwwwwwwwwwwwwwwwwww";
    }else if((userguess==0 && rand==2)){
        score.innerHTML=`You wonnnn computer chooses ${arr[rand]}`;
    }else if((userguess==2 && rand==0)){
        score.innerHTML=`You loose computer chooses ${arr[rand]}`;
    }
    else if(rand>userguess){
        score.innerHTML=`you loseee :( computer chooses ${arr[rand]}`;
    }else{
        score.innerHTML=`you wonnnn :)))) computer chooses ${arr[rand]}`;

    }
}
