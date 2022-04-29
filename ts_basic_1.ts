// 10 mins
// Question 1: Something isn't good, tell us which part is bad possible?
const fn = (n: any) => {
    if (Math.random() > n) return 10;
    return "Ya";
}


// Question 2: Creating a interface for func:fn
function main(fn: any){
    return fn(1)
}
