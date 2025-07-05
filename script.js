let score=document.querySelector('.score');
let user=document.querySelector('.user-guess');
let arr=['scissor','paper','rock'];

user.addEventListener('click',function(element){
    let rand=Math.floor(Math.random()*3+1);
    let index=element.target.parentElement.dataset.value;
    generateResult(index,rand);
    console.log(rand);  
})

function generateResult(userguess,rand){
    if(userguess==rand){
        score.innerHTML="Draw";
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
