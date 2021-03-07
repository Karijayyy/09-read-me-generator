// TODO: Include packages needed for this application
let inquirer = require("inquirer");
let fs = require("fs");
let path = require("path");
let generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
   {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
   },
{
      type: "input",
      message: "Enter your project description.",
      name: "description",
   },
 
 {
      type: "input",
      message: "What is this projects usage for?",
      name: "usage",
 },

 {
      type: "list",
      message: "Choose a license for your project.",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "NONE"]
   },
 {
      type: "input",
      message: "If applicable, please include who the other contributors are.",
      name: "contributing",
   },
 {
      type: "input",
      message: "Please provide instructions for use.",
      name: "instructions",
   },
 {
      type: "input",
      message: "Do you have additional questions?",
      name: "questions",
   },
 {
      type: "input",
      message: "Enter a screenshot of deployed app.",
      name: "screenshot",
   },
 {
      type: "input",
      message: "If applicable, please include any resources you may have used.",
      name: "resources",
   },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions).then(answers => {
      writeToFile("README.md", generateMarkdown(answers))
   })
}

init();
