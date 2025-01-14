//variables and data
// Declare variables of different types
const name = "John Doe";
const age = 25;
const isStudent = true;
const hobbies = ["Reading", "Coding", "Traveling"];
const person = { firstName: "Jane", lastName: "Doe", profession: "Engineer" };

// Log values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);



//operators
// Simple calculator function
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("Invalid input. Please enter valid numbers.");
      return;
    }
  
    let result;
  
    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          alert("Error: Division by zero is not allowed.");
          return;
        }
        result = num1 / num2;
        break;
      default:
        alert("Invalid operation. Please choose +, -, *, or /.");
        return;
    }
  
    alert(`Result: ${result}`);
  }
  
  // Call the calculator function
  calculator();


// Function to greet the user
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript Basics.`;
  }
  
  // Display the greeting in an HTML element
  const userName = prompt("Enter your name:");
  const greetingMessage = greetUser(userName);
  document.getElementById("greeting").innerText = greetingMessage;
  
  // 4. Check Voting Eligibility
  const userAge = parseInt(prompt("Please enter your age:"), 10);
  const eligibilityMessageDiv = document.getElementById("eligibilityMessage");
  
  if (userAge >= 18) {
    eligibilityMessageDiv.textContent = "You are eligible to vote!";
  } else if (userAge > 0) {
    eligibilityMessageDiv.textContent = "You are not eligible to vote yet.";
  } else {
    eligibilityMessageDiv.textContent = "Invalid age entered.";
  }
  
  // 5. Display Numbers from 1 to 10
  const numberList = document.getElementById("numberList");
  for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
  }
  
  // 7. Modify Elements and Add Dynamic Content
  // Change the text of the <h1> element
  const heading = document.querySelector("h1");
  heading.textContent = "JavaScript in Action!";
  
  // Add a new paragraph to the dynamic-content <div>
  const dynamicContentDiv = document.getElementById("dynamic-content");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This content was added dynamically using JavaScript.";
  dynamicContentDiv.appendChild(newParagraph);
  