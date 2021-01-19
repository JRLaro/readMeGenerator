
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license) {
  case "MIT": 
    return "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
    break;
    case "GPLv2": 
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    break;
    case "Apache": 
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
    case "BSD 3 -clause": 
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    break;

  default:
    console.log("Select a license");
    break;
  };

};


// TODO: Create a function that returns the license link
function renderLicenseSection(license) {
  switch (license) {
    case "MIT": 
      return "https://choosealicense.com/licenses/mit/";
      break;
    case "Apache":
      return "https://choosealicense.com/licenses/apache-2.0/#"
      break;
    case "GPLv2":
      return ""
    default:
      console.log("Select a license");
      break;
    };
  
  };


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(renderLicenseBadge(data.license));
  return ` 
# ${data.title}

${renderLicenseBadge(data.license)}
  

## *Description* 
    
${data.description}
  
  
  
## *Installation*
  
The application will be invoked by using the following command:
${data.install}
  
      
      
## *Technologies*
      
${data.tech}
       
  
  
## *Usage* 
  
  
  
## *Roadmap*
  
  ${data.roadmap}
  
  
  
## *Credits // License*
      
${data.license} License

${renderLicenseSection(data.license)}
`;

}

module.exports = generateMarkdown;
