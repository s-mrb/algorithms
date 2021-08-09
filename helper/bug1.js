const foo = ()=>{
    for(i=0; i<5; i++){
        bar(i)
    }
}

const bar = (digit)=>{
    for(i=0; i<5; i++){
        console.log(digit)
    }
}

foo()