import { add } from 'lib-a';


// Define a calculate function that uses the 
// Calculator class from lib-a

export const calculate = (a: number, b: number) => {
    return add(a, b);
}
