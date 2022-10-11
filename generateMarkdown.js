// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (license === "MIT" || license === "Apache 2.0" || license === "GPL 3.0" || license === "BSD 3"){
        return `![GitHub](https://img.shields.io/badge/license-${license}-green?style=plastic)`;
    }
    else {
        return ``;
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
    if (license === "MIT" || license === "Apache 2.0" || license === "GPL 3.0" || license === "BSD 3"){
        return `View license: (./LICENSE)`;
    }
    else {
        return ``;
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
    if (license === "MIT" || license === "Apache 2.0" || license === "GPL 3.0" || license === "BSD 3"){
        return `Licensed under the standard ${license} license. Please refer to the license in the repo for more information.`;
    }

    else {

        return ``;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  For any additional questions, please use the below contact details to get in touch via GitHub or email.
  
  GitHub: (https://github.com/${data.github})
  
  Email address: ${data.email}
  
  `;
}

module.exports = generateMarkdown;
