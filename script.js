let rand=Math.floor(Math.random()*3+1);
let score=document.querySelector('.score');
function generateResult(userguess,rand){
    if(userguess==rand){
        score.innerHTML="Draw";
    }

}
