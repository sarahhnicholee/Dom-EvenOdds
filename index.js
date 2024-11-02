// TODO: this file! :)
const form= document.querySelector("form");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");

let nums= [];
let evenNums = [];
let oddNums= [];

showAllNums=()=> {
    const output= document.querySelector("output")
    output.innerText= nums
};

showAllEvenNums = () => {
    const output = document.querySelector("#evens output");
    output.innerText = evenNums;
  };

  showAllOddNums = () => {
    const output = document.querySelector("#odds output");
    output.innerText = oddNums;
  };

  evenOrOdd = () => {
    if (nums.length > 0) {
      if (nums.at(0) % 2 == 1) {
        oddNums.push(nums.shift());
        showAllOddNums();
      } else {
        evenNums.push(nums.shift());
        showAllEvenNums();
      }
    }
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get("number") !== "") {
      nums.push(data.get("number"));
      showAllNums();
      form.reset();
    }
  });

  sortOne.addEventListener("click", function (event) {
    event.preventDefault();
    evenOrOdd();
    showAllNums();
    form.reset();
  });
  
  sortAll.addEventListener("click", function (event) {
    event.preventDefault();
    while (nums.length > 0) {
      evenOrOdd();
      showAllNums();
    }
    form.reset();
  });