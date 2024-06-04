let scoreStr=localStorage.getItem('Score');
let score;

resetScore(scoreStr);  //initialization tep

function resetScore(scoreStr){
    score=scoreStr? JSON.parse(scoreStr) :{
        win: 0,
        lost:0,
        tie:0,
       
    }; 
    
score.displayScore = function(){
return`  won:${score.win},lost:${score.lost},Tie:${score.tie}`;
} 

showresult( );

}



function generateComputerchoice(){

     // this will generate random number between 0 and 3 by Math.random()
    let randomNumber = Math.random()*3;
    
   if (randomNumber>0 && randomNumber<=1){
       return  'Bat';
       //console.log('computer choice is bat');
   }
   else if (randomNumber>1 && randomNumber <=2)
   {
        return 'Ball';
       //console.log('computer choice is ball');
   }
   else{
     return' Stump';
    //console.log('computer choice is stump');
   }
}

function getresult(usermove, computermove){
if (usermove==='Bat'){
    if (computermove === 'Ball')
{
score.win =score.win+1;
return 'User won';
}
else if ( computermove === 'Bat')
{
score.tie++;
return `It's Tie`;
}
else if (computermove=== 'Stump')
{
score.lost++;
return 'computer won';
}
}

else if(usermove==='Ball')
{
    if(computermove==='Ball')
    {
        score.tie++;
        return `it a tie`;
    }
    else if (computermove=== 'Bat')
    {
        score.lost++;
        return 'computer won';
    }
    else if (computermove==='Stump'){
        score.win++;
        return 'user won';
    }

}
else{
    if (computermove==='Ball'){
        score.lost++;
        return 'computer won';
    }
    else if (computermove === 'Bat'){
        score.win++;
        return 'user won';
    }
    else if  (computermove==='Stump'){
        score.tie++;
        return  ` It's tie `;
    }
}

}

function showresult(usermove,computermove,result)
{
localStorage.setItem('score',JSON.stringify(score));
document.querySelector('#user-move').innerText = usermove !== undefined ?` you have chosen ${usermove}` : '';
document.querySelector('#computer-move').innerText = 
computermove !== undefined ? ` computer choice is ${computermove}` : '';
document.querySelector('#result').innerText = result !== undefined ?`Result = ${result}` :'';
document.querySelector('#user-move').innerText = `Score ${score.displayScore()}`;

/*alert(`you have choose ${usermove}. computer choice is ${computermove} and 
${result}
${score.displayScore()}`);*/
}
