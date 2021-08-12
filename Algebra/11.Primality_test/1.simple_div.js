const isPrime = (n)=>{

    if(n<=1){
        return 0
    }
    for(let i=2; i*i<=n;i++){
        if(!(n%i)){
            return 0
        }
    }
    return 1
}

console.log(isPrime(-7))