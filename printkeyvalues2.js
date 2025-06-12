let a = {
    name : "dinesh",
    age : 28,
    adress : "chennai"
}

let b = {
    school : "USA",
    college : "europe" 
}

let c = {...a,...b}

function str(d){
    for (let key in d)
    {
        if(typeof d[key] == "number")
        {
            console.log(key, d[key])
        }
    }
}
str(c)