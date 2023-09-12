document.addEventListener("DOMContentLoaded", function () {
  const numberKeys = document.querySelectorAll(".dark-btn");
  const input = document.querySelector(".input");
  const output = document.querySelector(".output");
  const actions = document.querySelectorAll("[data-action]");
  const deleteBtn = document.querySelector(".delete");
  const clear = document.querySelector(".clear");
  const decimal = document.querySelector(".decimal");
  const equalButton = document.querySelector(".equal");
  const history = document.querySelector(".history");
  const getCalcHistory = document.querySelector(".calc-history-box");
  const calc_history = document.querySelector(".calc-history");

  //   Show numbers on the screen
  numberKeys.forEach((numberKey) => {
    numberKey.addEventListener("click", () => {
      input.innerHTML += numberKey.innerHTML;
      decimal.disabled = false;
    });
  });

  //   For special calculation to show on screen
  actions.forEach((action) => {
    action.addEventListener("click", () => {
      input.innerHTML += action.innerHTML;
      decimal.disabled = false;
    });
  });

  //   Delete each digit or letter
  deleteBtn.addEventListener("click", () => {
    input.innerText = input.innerText.slice(0, -1);
  });

  //   Clear the screen
  clear.addEventListener("click", () => {
    input.innerText = "";
    output.innerText = "";
  });

  decimal.addEventListener("click", function () {
    if (input.innerHTML.includes(".")) {
      decimal.disabled = true;
    }
  });

  //   Function to handle number extraction and conversion for sin, cos, tan and log
  function numConversion() {
    const getNumber = input.innerHTML.slice(3, input.innerHTML.length);
    const toNumber = Number(getNumber);
    const toRadian = toNumber * (Math.PI / 180);
    return toRadian;
  }

  //   Equal to handler
  equalButton.addEventListener("click", () => {
    if (input.innerHTML.includes("sin")) {
      // For sine
      const result = Math.sin(numConversion());
      const approximate = result.toFixed(5);
      output.innerText = approximate;
    } else if (input.innerHTML.includes("cos")) {
      // For cosine
      const result = Math.cos(numConversion());
      const approximate = result.toFixed(5);
      output.innerText = approximate;
    } else if (input.innerHTML.includes("tan")) {
      // For tangent
      const result = Math.tan(numConversion());
      const approximate = result.toFixed(5);
      output.innerText = approximate;
    } else if (input.innerHTML.includes("log")) {
      // For logarithm
      const getNumber = input.innerHTML.slice(3, input.innerHTML.length);
      const toNumber = Number(getNumber);
      const result = Math.log(toNumber);
      const approximate = result.toFixed(5);
      output.innerText = approximate;
    } else if (input.innerHTML.includes("²")) {
      // For squares
      const getNumber = input.innerHTML.slice(0, input.innerHTML.length - 1);
      const toNumber = Number(getNumber);
      const result = toNumber ** 2;
      const approximate = result.toFixed(5);
      output.innerText = approximate;
    } else if (input.innerHTML.includes("√")) {
      // For Square root
      const getNumber = input.innerHTML.slice(1, input.innerHTML.length);
      const toNumber = Number(getNumber);
      const result = Math.sqrt(toNumber);
      const approximate = result.toFixed(5);
      output.innerText = approximate;
    } else {
      output.innerText === "Error";
    }

    const maxLength = 8;
    const currentOutput = output.innerText;
    if (currentOutput > maxLength) {
      const reducedOutput = currentOutput.substring(0, maxLength);
      output.innerText = reducedOutput;
    }
    console.log(input.textContent);
    addToHistory();
  });
  const calcHistory = [];
  function addToHistory() {
    const resultObj = {
      input: input.textContent,
      output: output.textContent,
    };
    console.log(resultObj);
    calcHistory.push(resultObj);
    console.log(calcHistory);
  }

  history.addEventListener("click", () => {
    // calc_history.style.display = "block";
    calc_history.classList.toggle("addDisplay");

    getCalcHistory.innerHTML = "";
    calcHistory.forEach((each) => {
      let display = `<p> ➡️  ${each.input} = ${each.output}</p>`;
      getCalcHistory.innerHTML += display;
    });
  });
  window.addEventListener("load", () => {
    calc_history.style.display = "none";
  });
});
