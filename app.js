let randomNumber= Math.floor(Math.random()*100)+1;
let givenNumber= document.getElementById("input");
let enterButton=document.getElementById("enter")
let restartButton=document.getElementById("restart")
let output=document.getElementById("output")
console.log(randomNumber);

let times=10;
let count=0;

enterButton.addEventListener("click", function () {
    var userInput = givenNumber.value;
    if (isNaN(userInput) || userInput > 100 || userInput <= 0) {
      alert("Please enter a valid number..");
    } else {
      count += 1;
      if (userInput == randomNumber) {
        output.innerHTML = `Congratulations you found ${number} on the ${count} th try...`;
      } else if (userInput < randomNumber) {
        output.innerHTML = `Please enter larger number, your remaining right: ${
          times - count
        }`;
      } else if (userInput > randomNumber) {
        output.innerHTML = `Please enter smaller number, your remaining right: ${
          times - count
        }`;
      }
      if (count == 10) {
        enterButton.style.display = "none";
        restartButton.style.display = "none";
        output.innerHTML = "Game over... Restart to start again.";
      }
    }
  });
  
  restartButton.addEventListener("click", () => location.reload());  