//
//Print Even and Odd Numbers
//

const isPrime = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
};

let a = [1,2,5,11,8]
let b = a.filter(even=>even%2==0)
console.log(b)
let c = a.filter(odd=>odd%2!=0)
console.log(c)
let d = a.filter(isPrime);
console.log(d)