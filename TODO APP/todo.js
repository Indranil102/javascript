let todolist=[
    {
        item:'learn JS',
        Duedate:'12/4/2024'
    },
    {
        item:'foucs on works',
        Duedate:'12/4/2024'
    }
];
displayItem();


function addTodo(){
let inputElement=document.querySelector('#todo-input');
let dateElement=document.querySelector('#todo-date');

let todoItem=inputElement.value;

let tododate=dateElement.value;
//console.log(todoItem);
todolist.push({item:todoItem,Duedate:tododate});
inputElement.value='';
dateElement.value='';



displayItem();

}

function displayItem(){
    let containerelement= document.querySelector('.todo-container');
  

    let newHTML='';
    for (let i=0;i<todolist.length;i++)
        {
            let Item=todolist[i].item;
            let Duedate=todolist[i].Duedate;
            

            newHTML += `
            
            <span>${Item}</span>
             <span>${Duedate}</span>
            <button class="btn-delete" onclick=" todolist.splice(${i},1);
            displayItem();">delete</button>
            `;
            

        }
    containerelement.innerHTML=newHTML;
    
   
}