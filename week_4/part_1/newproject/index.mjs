import chalk from "chalk"

console.log(chalk.blue("ho"));
console.log(chalk.red.bold("ho"));
console.log(chalk.green.underline("ho"));
console.log(chalk.white.italic("merry christmas"));

// this file runs irrespective of whether you
// run it directly or using npm run start2
// and it will even run if you dont set 
// type to module in requirements.json