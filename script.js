const fibs = function (n) {
    let fib = [0, 1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    console.log(fib)
}

fibs(8)
fibs(13)

const fib = [];

const fibsRec = function (n) {
    if (n < 2) {
        fib[n] = n;
        return n;
    }
    fib[n] = fibsRec(n - 2) + fibsRec(n - 1);
    return (fibsRec(n - 2) + fibsRec(n - 1));
}

// console.log(fibsRec(8))
fibsRec(8);
console.log(fib)
fibsRec(13)
console.log(fib)