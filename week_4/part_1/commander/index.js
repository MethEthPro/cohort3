// we learn hoe to us the commander package
// that allows us 
// Create a command line interface that lets the user specify
//  a file path and the nodejs process counts the number of words
//   inside it.


// Library to use - https://www.npmjs.com/package/commander

// try to go through it , then only come here
// we have done npm install commander

const fs=require("fs");

const path=require("path");
const { program } =require("commander");

program.option('-p, --path <path>', 'path to the file');

program.parse(process.argv);

const options = program.opts();
const newpath=`${options.path}`;
if(path.isAbsolute(newpath)){
    const data=fs.readFileSync(newpath,"utf-8");
    console.log(data.length);
}
if (!options.path) {
    console.error("Error: --path argument is required");
    process.exit(1);
  }
  




