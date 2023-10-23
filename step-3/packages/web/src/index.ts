import { calculate } from 'lib-b';

const style = require('./style.less');
const style2 = require('./style.less');



const printStyle = (): void => {
    console.log("style: ", style);
    console.log("style2: ", style2);
};

printStyle();


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
