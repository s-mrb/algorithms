const fn = (n)=>{
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    else{
        return fn(n-1)+fn(n-2)
    }
}

console.log(fn(8))