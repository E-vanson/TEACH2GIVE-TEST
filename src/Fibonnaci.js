/*Question 2: Fibonacci Sequence
Write a program to generate the Fibonacci sequence up to 100.*/

function fibonacciGenerator(limit){
    let fibonacciSeq = [0,1];

    while(true){
        let nxtFibonacci = fibonacciSeq[fibonacciSeq.length - 1] + fibonacciSeq[fibonacciSeq.length - 2];
        if(nxtFibonacci <= limit){
            fibonacciSeq.push(nxtFibonacci);
        }else{
            break;
        }
    }
    return fibonacciSeq;
}

let seq = fibonacciGenerator(100);
console.log("Fibonacci sequence with limit of 100: ");
console.log(seq.join(","));