const operation = [];

const operands = document.querySelectorAll('.num');
operands.forEach((button) => {
    button.addEventListener('click', (e) => {
        document.getElementById('output').textContent += button.id;
    });
});

const operators = document.querySelectorAll('.operators');
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        document.getElementById('output').textContent += button.id;
    });
});