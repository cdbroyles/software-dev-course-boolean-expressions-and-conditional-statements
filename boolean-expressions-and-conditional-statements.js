/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
let location = null;
let openChest = null;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ").toLowerCase();

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  location = "through the mountains";
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" && hasMap) {
  console.log("You find your way to the village.");
} else if (choice === "village" && !hasMap) {
  console.log("You get lost, wander aimlessly, and die.");
}

if (location === "through the mountains") {
  console.log("You find a treasure chest!");
  openChest = readline.question("Do you open it? (yes/no)? ").toLowerCase();
}

if (openChest === "yes") {
  console.log("You open the chest and find a sword!");
} else if (openChest === "no") {
  console.log("You feel as though the chest might be a trick.  You decide to leave it.");
}

if (openChest) {
  console.log("An enemy approaches.");
  fight = readline.question("Do you want to fight (yes/no)? ").toLowerCase();
  if (fight === "yes" && openChest === "yes") {
    console.log("You win the battle and live happily ever after!.");
  } else if (fight === "no" || openChest === "no") {
    console.log("The enemy overpowers you and you die.");
  }
}
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/