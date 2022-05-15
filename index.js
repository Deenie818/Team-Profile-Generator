// WHEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team

//require inquirer and fs
const inquirer = require('inquirer');
const fs = require('fs');

//generate team html
const generateHtml= require('./src/generateHtml.js');

//require team info
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//array for roles
const managers = [];
const engineers = [];
const interns = [];

//confirm new team member
const compileTeamMember = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'compileTeamMember',
                message: "Would you like to add another team member?",
            },
        ])
        .then((answers) => {
            if (answers.compileTeamMember === true) {
                question1();
            } else {
                // console.log(managers, engineers, interns);
                
        // deleteHtml();
                // topHtmlFile();
                // managerGenerator();
                // engineerGenerator();
                // internGenerator();
                // bottomHtmlFile();
                var finishHtml=generateHtml(managers, engineers, interns);
                fs.writeFile("./dist/index.html", finishHtml, function(err){
                    if(err) throw err
                });
                console.log("Employee added");
            }
        });

};
// question1
const question1 = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "What is the employees role?",
                choices: ['Manager', "Engineer", "Intern"],
            },
        ])
        .then((answers) => {
            if (answers.role === "Manager") {
                managerQuestions();
            } else if (answers.role === "Engineer") {
                engineerQuestions();
            } else if (answers.role === "Intern") {
                internQuestions();
            }
        });
};

question1();

//manager questions
const managerQuestions = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's ID number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "what is the manager's office number?",
            },
        ])
        .then((answers) => {
            const newManager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber,
            );
            managers.push(newManager);
            compileTeamMember();
        });

};

// engineer questions
const engineerQuestions = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?",
        },
    ])
    .then((answers) => {
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github,
        );
        engineers.push(newEngineer);
        compileTeamMember();
    });

};

// intern questions
const internQuestions = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the interns's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did the intern attend?",
        },
    ])
    .then((answers) => {
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        );
        interns.push(newIntern);
        compileTeamMember();
    });

};






