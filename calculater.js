let expression = "";

function EnterNumber(value) {
    expression += value;
    document.getElementById("Answer").value = expression;
}

function EnterOperator(operator) {
    if (expression === "") return;
    const lastChar = expression[expression.length - 1];
    if ("+-*/".includes(lastChar)) {
        expression = expression.slice(0, -1); 
    }
    expression += operator;
    document.getElementById("Answer").value = expression;
}

function EnterEqual() {
    try {
        const result = eval(expression);
        document.getElementById("Answer").value = result;
        expression = result.toString(); 
    } catch {
        document.getElementById("Answer").value = "Error";
        expression = "";
    }
}

function EnterClear() {
    expression = "";
    document.getElementById("Answer").value = "";
}
