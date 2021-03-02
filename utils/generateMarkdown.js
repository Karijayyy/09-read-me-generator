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
//sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.usage}
  
  ## Installation
 ${data.installation}

  ## Usage
  ${data.usage}

  ## License
${data.license}

  ## Contributing
${contributing}

  ## Tests
  ${data.test}

  ## Questions
${data.questions}

  ## Screenshot
  ${data.screenshot}

  ## Resources
  ${data.resources}
  `;
}

module.exports = generateMarkdown;
