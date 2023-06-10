function linearSearch(arr, target){
  for(let i=0; i< arr.length; i++){
    if(arr[i] === target){
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([2,4,6,8,10],4)) //1
console.log(linearSearch([2,4,6,8,10],10)) //4
console.log(linearSearch([2,4,6,8,10],14)) //-1

//Big O - O(n)
