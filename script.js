const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  const target = e.target;

  if (!target.matches("button")) return;

  const value = target.dataset.value;
  const action = target.dataset.action;

  if (value) {
    display.value += value;
  }

  if (action === "clear") {
    display.value = "";
  }

  if (action === "delete") {
    display.value = display.value.slice(0, -1);
  }

  if (action === "equals") {
    try {
      display.value = calculate(display.value);
    } catch {
      display.value = "Error";
    }
  }
});

// safer evaluation
function calculate(expr) {
  // allow only numbers and operators
  if (!/^[0-9+\-*/.() ]+$/.test(expr)) {
    throw new Error("Invalid input");
  }
  return Function(`"use strict"; return (${expr})`)();
}