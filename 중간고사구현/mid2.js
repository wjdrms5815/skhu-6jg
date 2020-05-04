let a = [];

    for(let i=0; i<=100; i++){
        a[i] = Math.floor(Math.random()*100+1);}

        a.sort(function(left,right){
            return right-left;
        })

        console.log(a);