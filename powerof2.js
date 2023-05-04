function isPowerOf2(n){
  if(n<1){
    return false;
  }
  while (n>1){
  if(n%2 !== 0){
    return false
  }
  n = n/2;
  }
  return true
}

console.log(isPowerOf2(1)) //true
console.log(isPowerOf2(16)) //true
console.log(isPowerOf2(15)) //false

//BigO(log(n)) time complexity

function isPowerOf2BitWise(n){
  if(n<1){
    return false;
  }
  return (n & (n-1)) === 0;
}

console.log(isPowerOf2BitWise(1)) //true
console.log(isPowerOf2BitWise(16)) //true
console.log(isPowerOf2BitWise(15)) //false

//BigO(1) time complexity
