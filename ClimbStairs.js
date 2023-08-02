//climb a staircase with n stairs. you can climb step 1 or 2 at a time

function climbingStairs(n){
  const noOfWays =[1,2];
  for(let i=2; i<=n; i++){
    noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
  }
  return(noOfWays[n-1]);
}

console.log(climbingStairs(1));
console.log(climbingStairs(2));
console.log(climbingStairs(3));
console.log(climbingStairs(4));


// climbingStairs(1) -> 1
//climbingStairs (2) -> (1,1), (2)
//climbingStairs(3) -> (1,1,1),(1,2),(2,1)

//Big O - O(n)
