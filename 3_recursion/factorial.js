const factorial = (number) => ((number < 2) ? 1 : number * factorial(number - 1));

export default factorial;
