const fs = require("fs");
const utils = require("utils");
const inquirer = require("inquirer");
const generateReadMe = require("./utils/generateReadMe")
const writeFileAsync = utilPromisfy(fs.writeFile);

function promptUser (){
  return inquirer.prompt([
    {
      type: "input",
      name: "titleOfProject",
      message: "What is your project called?"
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project."
    },
    {
      type: "input",
      name: "installation",
      message: "Please provide installation directions."
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide what your project will be used for."
    },
    {
      type: "input",
      name: "license",
      message: "What is the license for the project?",
      choices: ["Apache", "GNU", "MIT", "ISC"]
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors for this project if any?"
    },
    {
      type: "input",
      name: "tests",
      message: "Are there test for this project?"
    },
    {
      type: "input",
      name: "questions",
      message: "What do I do if there is an issue?"
    },
    {
      type: "input",
      name: "githubusername"
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address where people can reach you?"
    }
  ]);

}

//async function to prompt user and take answers to generate the readme file.
async function init() {
  try {
    const answers = await promptUser();
    const generateContent = generateReadMe(answers);

    await writeFileAsync('./dist/README.md', generateContent);
    console.log('Successfully linked to README.md')
  } catch(err) {
    console.log(err);
  }
}
//initialize
init();