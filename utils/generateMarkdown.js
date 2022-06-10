// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

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
`;
}

module.exports = generateMarkdown;
