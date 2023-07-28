const base= 5;
const power = 7; 
const pow = (base,power) =>((power ===1) ? base : base * pow(base, power-1))

console.log(pow(base,power));