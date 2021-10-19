var viewValue = document.getElementById("textView");
var numberBtn = document.getElementsByClassName("numberBtn");
var operatorBtn = document.getElementsByClassName("operatorBtn");
var decimalBtn = document.getElementById("decimalBtn");
var equalBtn = document.getElementsByClassName("ButtonEqual");

var displayValue = "0";
var operatorValue;

// to update and display values in textView
function updateDisplayValue(input) {
  var btnText = input.target.innerText;
  if (displayValue === "0") {
    displayValue = "";
  }
  displayValue += btnText;
  return (viewValue.innerText = displayValue);
}

for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", updateDisplayValue);
}

// for operators
function operator(input) {
  operatorValue = input.target.innerText;
  if (displayValue !== "0") {
    displayValue += operatorValue;
  }
  return (viewValue.innerText = displayValue);
}

for (let i = 0; i < operatorBtn.length; i++) {
  operatorBtn[i].addEventListener("click", operator);
}

function addition() {
  return displayValue.split("+").reduce(function (a, b) {
    return +a + +b;
  });
}
function subtract() {
  return displayValue.split("-").reduce(function (a, b) {
    return a - b;
  });
}
function multiply() {
  return displayValue.split("*").reduce(function (a, b) {
    return a * b;
  });
}
function divide() {
  return displayValue.split("/").reduce(function (a, b) {
    return a / b;
  });
}

// decimal button function "point (.)"
function decimalPoint() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  viewValue.innerHTML = displayValue;
}

// equal button function:
function operate() {
  switch (operatorValue) {
    case "+":
      let add = addition();
      displayValue = add;
      viewValue.innerText = displayValue;
      break;
    case "-":
      let subtraction = subtract();
      displayValue = subtraction;
      viewValue.innerText = displayValue;
      break;
    case "*":
      let multiple = multiply();
      displayValue = multiple;
      viewValue.innerText = displayValue;
      break;
    case "/":
      let division = divide();
      displayValue = division;
      viewValue.innerText = displayValue;
      break;
    default:
      viewValue.innerText = displayValue;
  }
}

// to clear everything in textView
function clean() {
  displayValue = "0";
  viewValue.innerHTML = "";
}

// to delete last thing in textView
function back() {
  displayValue = displayValue.substring(0, displayValue.length - 1);
  viewValue.innerHTML = displayValue;
}

// for convert currencies
function shekelToDollar() {
  if (displayValue === "0") {
    window.alert("Enter value please!!");
  } else {
    var currency = displayValue;
    currency = currency / 3.44583;
    viewValue.innerText = currency.toFixed(3) + " $";
  }
}

function shekelToEuro() {
  if (displayValue === "0") {
    window.alert("Enter value please!!");
  } else {
    var currency = displayValue;

    currency = currency / 3.86169;
    viewValue.innerText = currency.toFixed(3) + " €";
  }
}

function euroToShekel() {
  if (displayValue === "0") {
    window.alert("Enter value please!!");
  } else {
    var currency = displayValue;
    currency = currency * 3.86169;
    viewValue.innerText = currency.toFixed(3) + " ₪";
  }
}

function dollarToShekel() {
  if (displayValue === "0") {
    window.alert("Enter value please!!");
  } else {
    var currency = displayValue;
    currency = currency * 3.44583;
    viewValue.innerText = currency.toFixed(3) + " ₪";
  }
}
