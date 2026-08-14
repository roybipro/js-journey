const displayText = document.getElementById("display-text");
let expression = "";
let justCalculated = false;

function render(value = expression) {
    displayText.textContent = value || "0";
}

function isOperator(value) {
    return "+-*/".includes(value);
}

function appendToResult(value) {
    const lastCharacter = expression.at(-1);

    if (justCalculated && !isOperator(value)) {
        expression = "";
    }
    justCalculated = false;

    if (isOperator(value)) {
        if (!expression && value !== "-") return;
        if (isOperator(lastCharacter)) {
            expression = `${expression.slice(0, -1)}${value}`;
        } else {
            expression += value;
        }
        render();
        return;
    }

    if (value === ".") {
        const currentNumber = expression.split(/[+\-*/]/).at(-1);
        if (currentNumber.includes(".")) return;
        expression += currentNumber ? "." : "0.";
    } else if (expression === "0") {
        expression = value;
    } else {
        expression += value;
    }

    render();
}

function clearResult() {
    expression = "";
    justCalculated = false;
    render();
}

function calculate() {
    if (!expression || isOperator(expression.at(-1))) return;

    // Only allow calculator digits, decimal points, and operators before evaluating.
    if (!/^[0-9+\-*/.]+$/.test(expression)) return;

    try {
        const result = Function(`"use strict"; return (${expression})`)();
        if (!Number.isFinite(result)) throw new Error("Invalid result");

        expression = String(result);
        justCalculated = true;
        render();
    } catch {
        displayText.textContent = "Error";
        expression = "";
        justCalculated = true;
    }
}

document.addEventListener("keydown", (event) => {
    if (/^[0-9.+\-*/]$/.test(event.key)) {
        appendToResult(event.key);
    } else if (event.key === "Enter" || event.key === "=") {
        calculate();
    } else if (event.key === "Escape") {
        clearResult();
    } else if (event.key === "Backspace") {
        expression = expression.slice(0, -1);
        justCalculated = false;
        render();
    } else {
        return;
    }

    event.preventDefault();
});
