const args = process.argv.slice(2);

const first = args[0];
const second = args[1];

const concatenatedArgs = `${first} is ${second}`;
console.log(concatenatedArgs);
