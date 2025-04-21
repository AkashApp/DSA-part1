// fibonacci series -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233...
// fibonacci(0) = 0, fibonacci(1) = 1
// f(n) = f(n-1) + f(n-2), for n>1

// Input: n=5
// Output: 5

// Input: n=6
// Output: 8

const fibonacci1 = (n) => {
    const arr = [0, 1];
    for(let i=2; i<=n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
}
console.log(fibonacci1(5));

// Optimized
const fibonacci2 = (n) => {
    if(n<=1)return n;
    return fibonacci2(n-1) + fibonacci2(n-2);
}

console.log(fibonacci2(5))
