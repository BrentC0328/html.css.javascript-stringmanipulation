class StringManipulation {
  constructor(str) {
    this.str = str;
  }

  // Define a method that returns the string in all uppercase letters
  toUpperCase() {
  let upperCaseStr = this.str.toUpperCase();
  return upperCaseStr;
  }

  // Define a method that returns the string in all lowercase letters
  toLowerCase() {
  let lowerCaseStr = this.str.toLowerCase();
    return lowerCaseStr;
  }

  // Define a method that returns the string with the first letter capitalized
  capitalizeFirstLetter() {

  let capitalLetter =
  this.str.charAt(0).
  toUpperCase();

  let restOfTheString = this.str.slice(1).toLowerCase();

    return capitalLetter + restOfTheString;
  }

  // Define a method that returns the string with the first letter of each word capitalized
  capitalizeWords() {
    return null;
  }

  // Define a method that returns an array of the words in the string
  stringToArray() {
    let stringArray = this.str.split(' ');
    return stringArray;
  }

  // Define a method that returns a string with the words in the provided array joined together
  arrayToString(arr) {
    const toTheString = arr.join(', ');
    return toTheString;
  }

  // Define a method that returns the length of the string
  getStringLength() {
    return this.str.length;
  }

  // Define a method that returns the string repeated the provided number of times
  repeatString(num) {

    let repeatedString = this.str;

    for (let i = 1; i < num; i++){
    repeatedString += this.str;}

    return repeatedString; 
  }

  // Define a method that returns the string with all vowels removed
  removeVowels() {
    return this.str.replace(/[aeiou]/gi, '');
  }

  // Define a method that returns the string with all punctuation removed
  removePunctuation() {
    return this.str.replace(/^\w\s]/gi, '');
  }
}