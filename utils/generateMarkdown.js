// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![MIT license](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Apache license 2.0') {
    return '[![Apache License](https://img.shields.io/badge/license-Apache%202.0-lightgreen)](https://opensource.org/licenses/Apache-2.0)'
  }
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, author) {
  if (license === 'MIT') {
    return '[![MIT license](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Apache license 2.0') {
    return `Copyright 2022 by ${author}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}

  ## TABLE OF CONTENTS
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [Contact](#contact)

  ## DESCRIPTION
  ${data.projectDescription}

  ## LINKS
  * ${data.username}
  * ${data.repo}


  ## INSTALLATIONS
  ${data.installations}

  ## USAGE
  ${data.usage}

  ## CONTRIBUTIONS
  ${data.contributions}

  ## TESTING
  ${data.tests}

  ## CONTACT
  If you have any questions at all, feel free to use my contact info below and I'd be happy to connect with you!
  ${data.contactInfo}
  
  ${renderLicenseSection(data.license, data.email)}
`;
}

module.exports = generateMarkdown;
