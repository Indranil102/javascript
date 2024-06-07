let noofTimesclicked=localStorage.getItem('noofTimesclicked') || 0;
function buttonPress(){
  
    noofTimesclicked++;
    localStorage.setItem('noofTimeclicked',noofTimesclicked); // to save the dataa
    updateB();
    
}
function updateB(){
    let button=document.querySelector('#my-button');
    
    if (noofTimesclicked%2===0)
    {
        button.classList.remove('js-odd');
        button.classList.add('js-even');

    }
    else{
        
        button.classList.remove('js-even');
        button.classList.add('js-odd');
    }
    button.innerText=noofTimesclicked;
}

updateB();

/////////////////////////////////////////////////////////////////////////////////

function wish(personname='indranil'){


let date= new Date();
//console.log(date);
let Hours=date.getHours();
let heading =document.querySelector('#greeting')
//console.log(Hours);
if (Hours>5 && Hours<12)
{
    heading.innerText=`Good morning ${personname}`;
}
else if(Hours=12 && Hours<18){
    heading.innerText=`Good Afternoon ${personname}`;

}
else if (Hours=18 && Hours<11){
    heading.innerText=`Good Evening ${personname}`;
}
else{
    heading.innerText=`Good night ${personname} `;
}
}

wish( 'Indranil');