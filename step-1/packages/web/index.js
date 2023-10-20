import * as math from 'lib-b';

const a = Math.round(Math.random() * 100);
const b = Math.round(Math.random() * 100);

const c = math.calculate(a, b) * 2;
console.log(`The double of ${a} and ${b} is ${c}`);

window.addEventListener('load', () => {
    var text = `The sum of ${a} and ${b} is ${math.calculate(a, b)}\n`;
    document.getElementById('log').innerHTML += text;
});
