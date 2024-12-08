function getSum(a,b){
    return parseInt(a)+parseInt(b);
}
let mysum=getSum("12",14);
console.log(mysum);

function get_sum(a){
    let sum=0;
    for(let i=1;i<=a;i++){
        sum=sum+i;
    }
    return sum;

    // or just directly use sum = n(n+1)/2
}
let mySUM=get_sum(5);
console.log(mySUM);