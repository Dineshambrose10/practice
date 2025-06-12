let a= {
    name : "dinesh",
    age : 28,
    adress :  "Chennai"
}
let b = Object.keys(a)
let c = Object.values(a)
console.log(b)
function k(d){
for(let key in d){
    if(typeof d[key] == "string")
    {
        console.log(key, d[key])
    }
}
}
k(a)

