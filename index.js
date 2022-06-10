// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    // Questions that require validations and are necessary to generate the README file
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.')
            }

        }
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: userEmail => {
            if (userEmail) {
                return true;
            } else {
                console.log('Please enter your email address')
            }
        }
    },
    {
        type: 'input',
        message: 'What is your GitHub repository?',
        name: 'repo',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please input your GitHub repository name')
            }
        }
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project.')
            }
        }
    },
    {
        type: 'input',
        message: 'What is your project about? (Please enter a detailed description of your project)',
        name: 'projectDescription',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description about your project')
            }
        }
    },
    // questions that do not require validations and are not necessary for the README file
    {
        type: 'input',
        message: 'Please list the installations you are using for this project. (Use commas inbetween each installation if there is more than one.)',
        name: 'installations',
    },
    {
        type: 'input',
        message: 'Please describe how to use this application',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list the installations you are using for this project. (Use commas inbetween each installation if there is more than one.)',
        name: 'installations',
    },
    {
        type: 'input',
        message: 'How can other developers contribute to this project?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'If you did so, please show how you ran your tests for this application and how other develops can run tests as well.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Please choose a license for your project.',
        choices: ['MIT', 'Apache license 2.0', 'BSD 3-clause "New" or "Revised" license', 'BSD 2-clause "Simplified" license', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
