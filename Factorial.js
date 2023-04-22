function factorial(n){
  result =1;
  for(i=2; i<=n;i++){
    result = result *i
  }
  return result;
}

console.log(factorial(1)) //1
console.log(factorial(3)) //3*2*1=6
console.log(factorial(5)) //5*4*3*2*1=120

//BigO(n) time complexity
