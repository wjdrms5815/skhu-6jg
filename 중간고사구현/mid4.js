function sum(arr){
    let result = 0.0;
    for(let i=0; i<arr.length; i++)
    result+=arr[i];
    return result;
}

function test_sum() {
    let arr = [];
    for(let i= 0 ;i<=5;i++){
        arr[i] = Math.floor(Math.random()*10+1);}
    console.log(arr);
    console.log(sum(arr));
}
    for(let i = 0 ; i<=5;i++)
    test_sum();