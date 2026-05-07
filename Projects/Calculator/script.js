const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            currentInput = '';
            display.textContent = '0';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.textContent = currentInput;
            } catch {
                display.textContent = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
