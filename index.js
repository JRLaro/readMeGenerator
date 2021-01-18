const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your Project about?',
    },
    {
        type: 'checkbox',
        name: 'tech',
        message: 'What technologies were used in this project?',
        choices: [
            'HTML',
            'CSS',
            'JavaScript',
            'JQuery',
            'Ajax',
            "Api's",
            'Node.js'
        ]
    },
    {
        type: 'input',
        name: 'roadmap',
        message: 'Do you have any ideas for releases in the future?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Are requirements necessary for installing this?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which licensing are you using?',
        choices: [
            'MIT',
            'GPLv2',
            'Apache',
            'BSD 3-clause'
        ]
    },
];


function writeToFile(data) {
    fs.writeFile('readMe.md', data, (err) => err ? console.log(err) : console.log('no errors found'));

}

function start() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(generateMarkdown(data));
            console.log("Just a moment while we generate your ReadMe...");
            writeToFile('readMe.md', generateMarkdown)
            console.log(data);
        });
}
start()
