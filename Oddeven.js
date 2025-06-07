//
//Print Even and Odd Numbers
//

let a = [1,2,5,11,8]
let b = a.filter(even=>even%2==0)
console.log(b)
let c = a.filter(odd=>odd%2!=0)
console.log(c)