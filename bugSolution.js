function foo(a, b) {
    return a + b;  //Corrected: Direct addition without zero check
}
console.log(foo(0, 1)); // Output: 1
console.log(foo(1, 0)); // Output: 1
console.log(foo(1, 1)); // Output: 2
console.log(foo(0,0)); //Output: 0