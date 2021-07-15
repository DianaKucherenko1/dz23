function factorial (n){

    if( n === 1  || n === 0) {
        return 1;
    }else{
        return n * factorial(n - 1 );
    }
}

factorial(3);

console.log(factorial(3));

function pow(num,deg) {

    if(deg === 1){
        return num
    }

    return num * pow (num , deg - 1);
}

pow(8,7);

console.log(pow(8,7));


function sum(a,b){

    if (b == 0) {
        return a;
    } else {
        return sum( a ^ b , (a & b) << 1)
    }
}

sum(2,3)

console.log(sum(2,3));