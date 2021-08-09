const fn = (n)=>{
    var current = 0
    var next = 1

        for(i =0; i<n; i++){
            [current,next] = [next,current+next]
        }
    return current
}


var d1 = Date.now()
console.log(fn(27))
var d2 = Date.now()
console.log(d2-d1)