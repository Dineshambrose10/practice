/*let a = [1,-2,2,4]
for (let i=0;i<a.length;i++)
    {if(a[i]<0)
{
    a[i] = 0
}
    }

console.log(a)*/

let a = [1,-2,-4,5,6]
let b = a.map(c=>(c<0 || c>5)?0:c)
console.log(b)

