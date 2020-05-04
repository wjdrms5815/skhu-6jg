let a = [];
let sum=0;
let aver=0.0;
    for(let i=0; i<=100; i++){
        a[i] = Math.floor(Math.random()*100+1);
        sum += a[i]
        aver = sum/100}

        a.sort()

    console.log(a);
    console.log(aver);
