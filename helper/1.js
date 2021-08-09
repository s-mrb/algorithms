

const check = (a,b)=>{

    console.log(a%b==(a-Math.floor(a/b)*b))
}


check(5,5)
check(0,5)
check(9,5)
check(45,5)
check(5,0)
console.log(5%0)