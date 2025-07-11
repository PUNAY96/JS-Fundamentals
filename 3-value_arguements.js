const args = process.argv.length-2;

if (args.length > 0) {
    console.log(args[0]);
} else {
    console.log("No argument");
}
