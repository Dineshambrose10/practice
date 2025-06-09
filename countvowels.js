let a = ["d","i","n","e","s","h"]
let b = 0, c=0
for (let i =0; i<a.length;i++){
    let count = a[i]
    if(count == "a" || count == "e"|| count == "i"|| count == "o"||count == "u")
    {
        b++;
    }
    else if(count != "a" || count != "e"|| count != "i"|| count != "o"||count != "u"){
        c++
    }

}
console.log(b)
console.log(c)
