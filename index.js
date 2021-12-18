// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// inquirer.prompt(questions).then(response).catch(error);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "userProjectTitle",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "userDescription",
  },
  {
    type: "input",
    message: "What are the installation instructions of your project?",
    name: "userInstallation",
  },
  {
    type: "input",
    message: "How do you use your project?",
    name: "userUsage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines to your project?",
    name: "userContributing",
  },
  {
    type: "input",
    message: "What is the test information of your project?",
    name: "userTests",
  },
  {
    type: "list",
    message: "Which license is applicable to your project?",
    choices: [
      "MIT_License",
      "GNU_GPLv3",
      "GNU_LGPLv3",
      "Mozilla_Public_License_2.0",
      "Apache_License_2.0",
      "GNU_AGPLv3",
      "The_Unlicense",
    ],
    name: "userLicense",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userGitHubName",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "userEmail",
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const generateREADME = ({
  userProjectTitle,
  userDescription,
  userInstallation,
  userUsage,
  userContributing,
  userTests,
  userLicense,
  userGitHubName,
  userEmail,
}) =>
  ` # ${userProjectTitle}

## Description
${userDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${userInstallation}

## Usage
${userUsage}

## Credits
${userContributing}

## Tests
${userTests}

## License
${userLicense}

## Contact
${userGitHubName} and ${userEmail}`;
// TODO: Create a function to initialize app
// function init() {}

const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) =>
      fs.writeFileSync("generatedREADME.md", generateREADME(answers))
    )
    .then(() => console.log("Successfully wrote to generatedREADME.md"))
    .catch((err) => console.error(err));
};

init();

// Function call to initialize app
// init();
