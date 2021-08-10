const fn = (n)=>{
return Math.round((Math.pow((1+Math.sqrt(5))/2,n))/Math.sqrt(5))
}

let start = Date.now()
console.log(fn(1476))
console.log(Date.now()-start)
