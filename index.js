// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown  = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your project for? Describe the purpose and motivation behind your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?',
        default: 'N/A',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How is your project used? Give guidelines for using your project.',
      },
      {
        type: 'list',
        message: 'What license does your project use?',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to your project?',
        default: 'For all contributions, please use GitHub to fork the repository to submit suggested updates or changes via feature branches',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command is needed to run tests?',
        default: 'Use command "npm run test" to execute available tests',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)

    .then((data) => {
        const readmeContent = writeToFile(data);
}

// Function call to initialize app
init();
