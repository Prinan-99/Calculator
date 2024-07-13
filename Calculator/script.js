function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function calculateResult() {
    const resultField = document.getElementById("result");
    try {
        const result = eval(resultField.value);
        resultField.value = result;
        logHistory(resultField.value);
    } catch (error) {
        resultField.value = "Error";
    }
}

function logHistory(expression) {
    const historyElement = document.querySelector('.history');
    historyElement.innerText = `${historyElement.innerText}\n${expression}`;
}
