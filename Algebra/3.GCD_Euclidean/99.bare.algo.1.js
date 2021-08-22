const gcd = (a,b)=>{
    while(b){
        [a,b] = [b,a%b]
    }
    return a
}

console.log(gcd(123,543))