/* Task 3*/
function divide(a, b){
  if (b == 0){
    return "Not possible to divide by 0"
  }
  return a / b;
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = { divide, multiply };