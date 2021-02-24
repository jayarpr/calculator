"use strict";

var checkDivideByZero = function checkDivideByZero(num1, num2) {
  if (num2 <= 0) return "Cannot divide by zero";else return num1 / num2;
};

var calculate = function calculate(num1, num2, operator) {
  console.log(num1, num2, operator);
  if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) return "Invalid input";
  if (!num1 || !num2) return "Invalid parameters";
  if (!operator) return "Please provide an operator => +, *, -, /";
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
      break;

    case "-":
      return num1 - num2;
      break;

    case "*":
      return num1 * num2;
      break;

    case "/":
      return checkDivideByZero(num1, num2);
      break;

    default:
      return "Invalid Operator";
  }
}; // console.log(calculate(1,2, "+"));
// console.log(calculate(1,2, "-"));
// console.log(calculate(1,2, "*"));
// console.log(calculate(1,2, "/"));
// console.log(calculate(1,"0", "/"));
// console.log(calculate(1,"hello", "+"));
// console.log(calculate(1,2));
// console.log(calculate(1,2, "%"));


document.addEventListener('DOMContentLoaded', function () {
  var numArray = [];
  var operators = ['+', '-', '/', '*'];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var isOperatorClicked = false;
  var isEqualClicked = false;
  document.addEventListener('click', function (event) {
    //clear any error message
    document.getElementById("error").innerHTML = "";
    var calculatedVaue = ""; //Return if the click is not on any of the button

    if (!event.target.matches('button')) {
      return;
    } //Parse the number values


    var btnClicked = parseInt(event.target.value); //If the button clicked is not a number, get the value as such

    if (Number.isNaN(btnClicked)) btnClicked = event.target.value; //If AC button was clicked clear the result textbox and clear the number Array

    if (btnClicked === "clear") {
      document.getElementById("result").innerHTML = "0";
      document.getElementById("error").innerHTML = "";
      numArray = [];
      return;
    }

    if (btnClicked === "=") {
      // if(numArray.length == 2 )
      //     numArray.push(numArray[0]);
      isEqualClicked = true;
      numArray.push(document.getElementById("result").innerHTML);
      calculatedVaue = calculate(numArray[0], numArray[2], numArray[1]);
      if (isNaN(calculatedVaue)) document.getElementById("error").innerHTML = calculatedVaue;else document.getElementById("result").innerHTML = calculatedVaue;
      numArray = [];
      return;
    } //Push  the data from result into numArray
    //numArray.push(document.getElementById("result").innerHTML);


    if (operators.includes(btnClicked)) {
      isOperatorClicked = true;
      numArray.push(document.getElementById("result").innerHTML);

      if (numArray.length === 3) {
        calculatedVaue = calculate(numArray[0], numArray[2], numArray[1]);

        if (isNaN(calculatedVaue)) {
          document.getElementById("error").innerHTML = calculatedVaue;
          return;
        } else {
          numArray = [];
          console.log('calculatedVaue', calculatedVaue);
          numArray.push(calculatedVaue);
          numArray.push(btnClicked);
          document.getElementById("result").innerHTML = calculatedVaue;
        }
      } else {
        // numArray.push(document.getElementById("result").innerHTML);
        numArray.push(btnClicked);
      } // console.log('numArray when op clicked',numArray, numArray.length);

    }

    if (numbers.includes(btnClicked) && isOperatorClicked) {
      isOperatorClicked = false;
      document.getElementById("result").innerHTML = ""; // document.getElementById("result").innerHTML = btnClicked; //event.target.value;
      // numArray.push(btnClicked);
    } // if(isEqualClicked) {
    //     isEqualClicked = false;
    //     document.getElementById("result").innerHTML = btnClicked; 
    // }


    if (!isOperatorClicked) {
      if (document.getElementById("result").innerHTML.trim() !== '0') document.getElementById("result").innerHTML += btnClicked; //event.target.value;
      else document.getElementById("result").innerHTML = btnClicked; //event.target.value;
    } // document.getElementById("result").innerHTML += btnClicked; //event.target.value;
    // console.log(numArray);

  });
});