class StringManipulation {
  constructor(str) {
    this.str = str;
  }

  // Define a method that returns the string in all uppercase letters
  toUpperCase() {
    return this.str.toUpperCase();
  }

  // Define a method that returns the string in all lowercase letters
  toLowerCase() {
    return this.str.toLowerCase();
  }

  // Define a method that returns the string with the first letter capitalized
  capitalizeFirstLetter() {
    return this.str.charAt(0).toUpperCase() + this.str.slice(1);
  }

  // Define a method that returns the string with the first letter of each word capitalized
  capitalizeWords() {
    return this.str.replace(/\b[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });
  }

  // Define a method that returns an array of the words in the string
  stringToArray() {
    return this.str.split(" ");
  }

  // Define a method that returns a string with the words in the provided array joined together
  arrayToString(arr) {
    return arr.join(" ");
  }

  // Define a method that returns the length of the string
  getStringLength() {
    return this.str.length;
  }

  // Define a method that returns the string repeated the provided number of times
  repeatString(num) {
    return this.str.repeat(num);
  }

  // Define a method that returns the string with all vowels removed
  removeVowels() {
    return this.str.replace(/[aeiou]/gi, "");
  }

  // Define a method that returns the string with all punctuation removed
  removePunctuation() {
    return this.str.replace(/[^\w\s]/gi, "");
  }
}