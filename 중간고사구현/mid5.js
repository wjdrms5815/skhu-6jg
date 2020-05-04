let a = [];
    for(let i=0; i<=100; i++){
        a[i] = Math.floor(Math.random()*100+1);}
        a.sort()
let b = a.filter((e)=>e%2===0);

let sum = b.reduce((a,b)=>a+b);
console.log(sum);
