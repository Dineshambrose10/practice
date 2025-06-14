let a = [1,1,1,2,3,4,5]
let c =0
function b(){
    for (let i=0; i<a.length;i++)
    {
        let count
        count = a[i]
        if(count == 1){
            c++
    
        }
        
    }
}
b()
console.log(c)