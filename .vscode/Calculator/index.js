function calculator(num1, num2, operation) {
    
    let result;
    switch (operation) {
        case 'add':
            result =  num1 + num2;
            break;
        case 'subtract':
            result =  num1 - num2;
            break;
        case 'multiply':
            result =  num1 * num2;
            break;
        case 'divide':
            result =  num1 / num2;
            break;
        default:
            result =  'Invalid operation';
    }
    return result;
}