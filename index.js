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
{
    type: "input",
    message: "Enter your project description" ,
    name: "description",
 }
 {
    type: "input",
    message: "" ,
    name: "usage",
 }
 {
    type: "list",
    message: "" ,
    name: "license",
 }
 {
    type: "input",
    message: "" ,
    name: "contributing",
 }
 {
    type: "input",
    message: "" ,
    name: "instructions",
 }
 {
    type: "input",
    message: "" ,
    name: "questions",
 }
 {
    type: "input",
    message: "" ,
    name: "screenshot",
 }
 {
    type: "input",
    message: "" ,
    name: "resources",
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
