class CapitalizeFirstLetterTestRunner {
  constructor() {}

  // Define a method to run all the test cases
  runAllTests() {
    // Create an instance of the CapitalizeFirstLetterTest class
    const capitalizeFirstLetterTest = new CapitalizeFirstLetterTest();

    // Call the test methods
    capitalizeFirstLetterTest.testLowerCase();
    capitalizeFirstLetterTest.testUpperCase();
    capitalizeFirstLetterTest.testMixedCase();
    capitalizeFirstLetterTest.testNumbers();
    capitalizeFirstLetterTest.testSpecialCharacters();
  }
}

// Create an instance of the CapitalizeFirstLetterTestRunner class and call the runAllTests method
const capitalizeFirstLetterTestRunner = new CapitalizeFirstLetterTestRunner();
capitalizeFirstLetterTestRunner.runAllTests();
