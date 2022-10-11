// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (license === "MIT" || license === "Apache 2.0" || license === "GPLv3" || license === "BSD 3"){
    `![GitHub](https://img.shields.io/badge/license-${license}-green?style=plastic)`;
    }
    else {
        ``;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
    if (license === "MIT" || license === "Apache 2.0" || license === "GPLv3" || license === "BSD 3"){
        `View license: (/LICENSE)`;
        }
        else {
            ``;
        }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
    if (license === "MIT" || license === "Apache 2.0" || license === "GPLv3" || license === "BSD 3"){
    `Licensed under the standard ${license} license. Please refer to the license in the repo for more information.`;
    }

    else {
        ``;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
