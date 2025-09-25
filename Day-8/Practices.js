// Primitive (Single values)
// let movies = "daku maharaj";// it is a string
// let rating = 4.5; // number
// let isBlockbuster = true ; // boolean


// Non-  primitives (Mutiples Values)
// let movie ={
//     name:"Dookudu",
//     genre: "Action"
// }; // object
// console.log(movie.name,movie.genre);


// let showTimes =["10 AM","2PM", "9pm" ,"6pm"];
// console.log(showTimes);


// Create movie object with array
let myMovie = {
    movieName:"Kaal",
    actors:["Ajay","SRk"],
    rating:5,
    is3d:false

// };
// // #### 2. Creating Objects & Arrays
// // 1. Literal Method (Most Common)
// let movie1 = { 
//     name: "Game Changer", 
//     director: "Rajamouli" 
//   };
  
//   // 2. Empty Object + Properties
//   let movie2 = {};
//   movie2.name = "RRR";
//   movie2.budget = "500Cr";
//   // 3. From Existing Object
// let movie3 = Object.create(movie1);
// movie3.name = "Bahubali";

// // 3 Ways to Create Arrays
// let prices = [250, 300, 400]; // Literal
// let seats = new Array(60, 60, 60); // Constructor
// let codes = Array.from("A12B34"); // From string

// Practice Exercise 2:
// Create theater object with arrays
// let theater = {
//     name: "PVR Cinemas",
//     screens: ["Screen1", "Screen2"],
//     facilities: ["AC", "Dolby Atmos"],
//     showCount: 5
//   };
// ### Part 2: DOM Basics (Afternoon Session)

// #### 1. DOM Tree Structure

// html
// <!-- Family Tree Analogy -->
// <html> <!-- Grandfather -->
//   <head> <!-- Father -->
//     <title>First Child</title>
//   </head>
//   <body> <!-- Uncle -->
//     <div id="screen"> <!-- Cousin -->
//       <button>Book Now</button> <!-- Grandchild -->
//     </div>
//   </body>
// </html>


// // 1. Select Element
// let screenDiv = document.getElementById("screen");

// // 2. Change Properties
// screenDiv.style.backgroundColor = "black";
// screenDiv.innerHTML = "<h2>Now Showing</h2>";

// // 3. Create New Elements
// let newButton = document.createElement("button");
// newButton.textContent = "6PM Show";
// screenDiv.appendChild(newButton);

// Theater Data
const cinema = {
    name: "AMB Cinemas",
    location: "HiTech City",
    movies: [
      { 
        title: "Kalki", 
        shows: ["10AM", "3PM"],
        seats: [60, 60]
      },
      {
        title: "Pushpa 2",
        shows: ["11AM", "4PM"],
        seats: [60, 60]
      }
    ]
  };
  console.log("Theater Name:", cinema.name);
console.log("First Movie:", cinema.movies[0].title);