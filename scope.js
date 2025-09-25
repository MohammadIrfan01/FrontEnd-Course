// // Scope concepts like Global and Block Scope
// let gobalVaribale = "Iam Global";

// // Task 2.2: Function Scope
// function varFunction(){
//     let varFunction="I back uo cheat@@@"
// }

// console.log(varFunction);
// console.log(gobalVaribale);





// Task 2.3: Block Scope
if (true) {
    let blockVariable = "I am in block";
    const alsoInBlock = "Me too";
    var notActuallyBlocked = "I can escape!";
    console.log(blockVariable);       // Works here
}
// console.log(blockVariable);        // Will cause error
console.log(notActuallyBlocked);     // Works! (but avoid this)