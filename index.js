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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync (path.join(process.cwd(), fileName), data)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then(answers=>{
        writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
