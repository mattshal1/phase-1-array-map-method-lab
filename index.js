const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Function to capitalize the first letter of a word
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to convert a string to title case
function toTitleCase(str) {
  // Split the string into words
  const words = str.split(' ');
  
  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => capitalizeFirstLetter(word));
  
  // Join the words back together to form the title in title case
  return capitalizedWords.join(' ');
}

// Use map() to convert each tutorial title to title case
const titlesInTitleCase = tutorials.map(tutorial => toTitleCase(tutorial));

// Print the new array of titles in title case
console.log(titlesInTitleCase);

// Function to return titles in title case
const titleCased = () => {
  return titlesInTitleCase;
}

module.exports = {
  titleCased
};
