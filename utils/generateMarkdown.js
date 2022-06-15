// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![MIT license](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Apache license 2.0') {
    return '[![Apache License](https://img.shields.io/badge/license-Apache%202.0-lightgreen)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'BSD 3-clause "New" or "Revised" license') {
    return '[![BSD 3-clause License](https://img.shields.io/badge/license-BSD%203--clause%20%22New%22%20or%20%22Revised%22-yellow)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  else if (license === 'BSD 2-clause') {
    return '[![https://img.shields.io/badge/license-BSD%202--clause%20%22Simplified%22-blueviolet)](https://opensource.org/licenses/BSD-2-Clause)'
  }
  else if (license === 'Mozilla Public License 2.0') {
    return '[![Apache License](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-orange)](https://opensource.org/licenses/MPL-2.0)'
  }
  else if (license === 'The Unlicense') {
    return '[![Apache License](https://img.shields.io/badge/license-The%20Unlicense-red)](https://opensource.org/licenses/unlicense)'
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
    return `Copyright 2022 by ${author}`
  }
  else if (license === 'Apache license 2.0') {
    return `Copyright 2022 by ${author}`
  }
  else if (license === 'BSD 3-clause "New" or "Revised" license') {
    return `Copyright 2022 by ${author}`
  }
  else if (license === 'BSD 2-clause "Simplified" license') {
    return `Copyright 2022 by ${author}`
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `Copyright 2022 by ${author}`
  }
  else if (license === 'The Unlicense') {
    return `Copyright 2022 by ${author}`
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
  
  ${renderLicenseSection(data.license, data.username)}
`;
}

module.exports = generateMarkdown;
