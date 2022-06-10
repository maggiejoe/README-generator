// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        // Questions that require validations and are necessary to generate the README file
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
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
            name: 'email',
            message: 'What is your email?',
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
            name: 'repo',
            message: 'What is your GitHub repository?',
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
            name: 'projectTitle',
            message: 'What is the title of your project?',
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
            name: 'projectDescription',
            message: 'What is your project about? (Please enter a detailed description of your project)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description about your project')
                }
            }
        },
        {
            type: 'input',
            name: 'contactInfo',
            message: 'Please add your contact information below',
            validate: contactInput => {
                if (contactInput) {
                    return true;
                } else {
                    console.log('Please enter your contact information.')
                }
            }
        },
        // questions that do not require validations and are not necessary for the README file
        {
            type: 'input',
            name: 'installations',
            message: 'Please list the installations you are using for this project. (Use commas inbetween each installation if there is more than one.)'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe how to use this application'
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How can other developers contribute to this project?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you did so, please show how you ran your tests for this application and how other develops can run tests as well.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            choices: ['MIT', 'Apache license 2.0', 'BSD 3-clause "New" or "Revised" license', 'BSD 2-clause "Simplified" license', 'Mozilla Public License 2.0', 'The Unlicense']
        }
    ])
}
   

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('Your README.md file has been created!')
        }
    });
 };

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt( questions() );
};

// Function call to initialize app
init();
