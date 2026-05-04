// ==========================================
// Activity 1: Searching Strings
// ==========================================
let text1 = "Learning JavaScript is fun!";
let includesJavaScript = text1.includes("JavaScript");
let positionOfFun = text1.indexOf("fun");

console.log("--- Activity 1 ---");
console.log("Includes 'JavaScript':", includesJavaScript);
console.log("Position of 'fun':", positionOfFun);


// ==========================================
// Activity 2: Transforming Strings
// ==========================================
let text2 = " CODE BOOTCAMP ";
let transformedText = text2.trim().toLowerCase();
let replacedText = transformedText.replace("bootcamp", "JavaScript");

console.log("\n--- Activity 2 ---");
console.log("Transformed & Replaced:", replacedText);


// ==========================================
// Activity 3: Breaking Apart a Sentence
// ==========================================
let text3 = "Coding is fun and educational";
let wordsArray3 = text3.split(" ");

console.log("\n--- Activity 3 ---");
console.log(wordsArray3);


// ==========================================
// Activity 4: Retrieving Substrings
// ==========================================
let text4 = "Bootcamp";
let firstChar = text4.charAt(0);
let extractedWord = text4.slice(4, 8); // Extracts "camp" (indices 4 through 7)

console.log("\n--- Activity 4 ---");
console.log("First Character:", firstChar);
console.log("Extracted Word:", extractedWord);


// ==========================================
// Advanced Challenge
// ==========================================
let advancedChallengeString = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;

let lines = advancedChallengeString.split("\n");

// Extract customer name
let customerName = lines[0].replace("Customer: ", "").trim();

// Split order into an array of items
let orderLine = lines[1].replace("Order: ", "").trim();
let orderItems = orderLine.split(", ");

// Convert total price to uppercase
let totalLineUpper = lines[2].trim().toUpperCase();

console.log("\n--- Advanced Challenge ---");
console.log("Customer Name:", customerName);
console.log("Order Items:", orderItems);
console.log("Total Line:", totalLineUpper);