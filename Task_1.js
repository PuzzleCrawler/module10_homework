let value = prompt("Enter a value:");

// Convert value to a number using unary plus operator
value = +value;

if (typeof value === "number") {
  // Check if value is not NaN
  if (!isNaN(value)) {
    if (value % 2 === 0) {
      console.log("The value is even.");
    } else {
      console.log("The value is odd.");
    }
  } else {
    console.log("The value is NaN.");
  }
} else {
  console.log("Uh oh, it looks like you made a mistake!");
}