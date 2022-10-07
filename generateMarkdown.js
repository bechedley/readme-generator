// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
    if licence === "MIT" {
        `Licensed under the standard MIT license. Please refer to the license in the repo for more information.`
    }
    if licence === "Apache 2.0" {
        `Licensed under the standard Apache 2.0 license. Please refer to the license in the repo for more information.`
    }
    if licence === "GPLv3" {
        `Licensed under the standard GNU GPLv3 license. Please refer to the license in the repo for more information.`
    }
    if licence === "BSD 3" {
        `Licensed under the standard BSD 3 license. Please refer to the license in the repo for more information.`
    }
    if licence === "None" {
        ``
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
