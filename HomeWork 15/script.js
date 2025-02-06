let operation = '';

function setOperation(op) {
    operation = op;
}

function calculate() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result = 'Введите оба числа!';
    } else {
        switch (operation) {
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = secondNumber !== 0 ? firstNumber / secondNumber : 'Ошибка: деление на ноль';
                break;
            default:
                result = 'Выберите операцию!';
        }
    }

    document.getElementById('result').innerText = 'Результат: ' + result;
}
