let a= [1,2,3,4]
function d(i,j){
  [a[i],a[j]] = [a[j],a[i]]
}
d(1,3)
console.log(a)
