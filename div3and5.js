let a = [15,10,2,3,4,5,15]
function div(){
    for (let i=0; i<a.length;i++){
        let c = a[i]
        if(c%3 ==0 && c%5 ==0){

       return true
    }
        
        }
        return false
        
}
console.log(div())