/*
Algorithm: GCD using Recursion

Explanation:

- have 4 vars, a,b,x,y
- Use GCD recursion algo
- in base condition return g,x=1 and y=0
- in upper calls,(the one's to which base condition returns): 
    [x,y] = [y, x-parseInt(a/b)*y]
*/

const eea = (a,b)=>{    
    if(b==0)
        return [a,1,0]
    let [g,x,y] = eea(b,a%b)
    return [g,y, x-parseInt(a/b)*y]
}

console.log(eea(8,12))