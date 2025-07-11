const arg = process.argv.slice(2);

const firstArg = Number(arg[0]);

if (Number.isInteger(firstArg)) {
    console.log(`My number: ${firstArg}`);
} else {
    console.log('Not a number');
}
