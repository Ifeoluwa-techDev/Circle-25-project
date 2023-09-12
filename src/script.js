document.addEventListener("DOMContentLoaded", function () {
  const numberKeys = document.querySelectorAll(".dark-btn");
  const input = document.querySelector(".input");
  const output = document.querySelector(".output");
  const actions = document.querySelectorAll("[data-action]");
  const deleteBtn = document.querySelector(".delete");
  const clear = document.querySelector(".clear");
  const decimal = document.querySelector(".decimal");
  const equalButton = document.querySelector(".equal");
  const percentage = document.querySelector(".percentage");
  const toggle = document.querySelector(".negate");
  const history = document.querySelector(".history");
  const getCalcHistory = document.querySelector(".calc-history-box");
  const calc_history = document.querySelector(".calc-history");

  numberKeys.forEach((numberKey) => {
    numberKey.addEventListener("click", () => {
      input.innerHTML += numberKey.innerHTML;
      decimal.disabled = false;
    });
  });

  actions.forEach((action) => {
    action.addEventListener("click", () => {
      input.innerHTML += action.innerHTML;
      decimal.disabled = false;
    });
  });

  deleteBtn.addEventListener("click", () => {
    input.innerText = input.innerText.slice(0, -1);
  });

  clear.addEventListener("click", () => {
    input.innerText = "";
    output.innerText = "";
  });

  decimal.addEventListener("click", function () {
    if (input.innerHTML.includes(".")) {
      decimal.disabled = true;
    }
  });

  percentage.addEventListener("click", () => {
    if (input.innerHTML) {
      const currentInput = parseFloat(input.innerHTML);
      const percentValue = currentInput / 100;
      input.innerHTML = percentValue.toString();
    }
  });

  toggle.addEventListener("click", () => {
    if (input.innerHTML) {
      const currentInput = parseFloat(input.innerHTML);
      input.innerHTML = (currentInput * -1).toString();
    }
  });

  equalButton.addEventListener("click", () => {
    try {
      const result = eval(input.innerHTML);
      if (isNaN(result) || !isFinite(result)) {
        output.innerText = "Error";
      } else {
        output.innerText = result;
      }
    } catch (error) {
      output.innerText = "Error";
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
      // let display = `<p> ${each.input} </p> <p> ${each.output}</p>`;
      let display = `<p> ➡️  ${each.input} = ${each.output}</p>`;
      getCalcHistory.innerHTML += display;
    });
  });
  window.addEventListener("load", () => {
    calc_history.style.display = "none";
  });
});
