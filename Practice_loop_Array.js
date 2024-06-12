let arr=[5,6];
arr.unshift(4);
console.log(arr);
arr.push(7);
console.log(arr);


function getElement(arr,pos){
    return arr[pos -1];
}

let arr1=[1,2,7,15,5,6,7];
console.log(getElement(arr1,4));


function arrCopy(arr){
    return arr.slice(0,arr.length)
}
let ar2r=[4,5,6,9,8];
console.log(arrCopy(arr2));




function prime(num){
    for (let i=2;i<num;i++)
        {
            if (num%i===0)
                {
                    return false;
                }
        }
        return true;
}
let num=2;
let i=0;
while (true)
    {
        if (prime(num)){
            console.log(num);
            i++;
            if (i>=5){
                break;
            }
            
        }
        num++;
       
    }
        


    for (let i=10;i>0;i--)
        {
            console.log(i);
        }

let num2=[1,-6,5,7,-98];
for (let i=0;i<num2.length;i++){
    if (num2[i]<0){
        continue;
    }
    console.log(num2[i]);

}
    

let arr3=['i ','am' , 'Javascript', 'learner'];
let result=' ';
for (let i=0;i<arr3.length;i++)
    {
        result+=arr3[i]+ ' ';
    }
    console.log(result);