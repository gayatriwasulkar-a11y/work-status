let userA = { name: "Gayatri", active: true };

let userB = userA; 

console.log("This is table");
console.log("Before:", { userA, userB });

userB.name = "Vidya";
console.log("After:", { userA, userB }); 
console.log("It is same memory address?", userA == userB); 

userB = { name: "Parth", active: false };

console.log("Final table");
console.log("UserA (Table 1):", userA.name); 
console.log("UserB (Table 2):", userB.name); 
console.log("Memory is full?", userA == userB); 
