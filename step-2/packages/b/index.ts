import { Calculator } from 'lib-a';

// Define a calculate function that uses the Calculator class from lib-a

export const calculate = (a: number, b: number) => {
    var calculator = new Calculator();
    return calculator.add(a, b);
}
