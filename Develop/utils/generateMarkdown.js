// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)]`;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `(https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}
_____
  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Table of Contents ๐
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contributions)
  - [Test Instructions](#testing)
  - [Questions](#questions)
  - [Website](#website)

  ### Description
  ๐
    ${data.description}

  ### Installation

  ๐พ
    ${data.installation}

  ### Usage

  ๐ป
    ${data.utalization}

  ### Contributions

  ๐
    ${data.contributions}

  ### Testing
  
  ๐งช
    ${data.testing}

  ### Questions 
  ๐จ
    P.s. ${data.contact}

  [Github Profile](https://github.com/${data.github})

  [Email](mailto:${data.email})
  
  #### Website
  ๐ผ๏ธ
  [Click Here!](${data.link})

`;
}

module.exports = generateMarkdown;
