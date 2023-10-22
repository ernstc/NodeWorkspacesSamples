import { calculate } from 'lib-b';

const a = Math.round(Math.random() * 100);
const b = Math.round(Math.random() * 100);

const c = calculate(a, b) * 2;
console.log(`The double of the sum of ${a} and ${b} is ${c}`);

window.addEventListener('load', () => {
    var text = `The sum of ${a} and ${b} is ${calculate(a, b)}\n`;

    var logElement = document.getElementById('log');
    if (logElement) {
        logElement.innerHTML += text;
    }
});
