// Задание 1
function getArrayParams(arr) {
 let max = arr[0];
 let min = arr[0];
 let sum = 0;
 let avg;
 for (let i = 0; i < arr.length; i++){ 
    sum += arr[i]
    avg = sum/arr.length
  if (max < arr[i]){
    max = arr[i]
   } 
  if  (min > arr[i]){
    min = arr[i] 
   } 
  }  
  return { max: max, min: min, avg: +avg.toFixed(2)};
}



function worker(arr) {
let sum = 0;
  
for (let i in arr){
sum += arr[i]
}
return sum;
}

function makeWork(arrOfArr, func){
  let max = -Infinity;
  let sumOfItem;
for (i = 0; i < arrOfArr.length; i++) {
sumOfItem = func(arrOfArr[i]);  

if (sumOfItem > max){
  max =  sumOfItem;
} 
}
return max;  
}

function worker2(arr) {
  let minItem = arr[0];
  let maxItem = arr[0]; 
  
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > maxItem){
      maxItem = arr[i]
    } else if  (minItem > arr[i]){
    minItem = arr[i]
  }
  }
let diff = maxItem - minItem; 
  
return diff;
}