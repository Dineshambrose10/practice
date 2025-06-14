let a = [2,3,5,4,7]
function prime(number){
    if(number<=1)
    for(let i=0 ; i<Math.sqrt(number); i++){
        if(number%i ==0){
            return false
        }
    }
}
let primenum = a.filter(prime)
console.log(primenum)