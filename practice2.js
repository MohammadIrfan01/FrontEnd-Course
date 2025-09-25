// let courseName = "JavaScrpit"
// function practiceScope (){

// let topic =  "variable";
// console.log(courseName + - + topic);
// }
// console.log(courseName + " - ")



// ### Exercise 2: Scope Practice
// Create `practice2.js`:

// Global scope
let courseName = "JavaScript";

function practiceScope() {
    // Function scope
    let topic = "Variables";
    console.log(courseName + " - " + topic);
    
    if (true) {
        // Block scope
        let detail = "Exploring scopes";
        console.log(detail);
    }
    console.log(detail); // Try uncommenting this u face a error
}

practiceScope();