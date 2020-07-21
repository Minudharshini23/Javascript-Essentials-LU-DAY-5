//getting input from the user and forming an array
let range=prompt("enter the range of your array:");
let arr=[];
for(let i=0;i<=range;i++)
{
let input=prompt("enter a num:");
arr.push(input);
}
console.log(arr);

//filtering the odd numbers

let fil_odd_arr=arr.filter((el)=>el%2!=0)
console.log(fil_odd_arr);

//generating cubes for the filtered odd numbers

let cubes=fil_odd_arr.map((el)=>el**3);
console.log(cubes);