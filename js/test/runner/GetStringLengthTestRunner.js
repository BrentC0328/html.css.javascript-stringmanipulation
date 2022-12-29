class GetStringLengthTestRunner {
  constructor() {}

  // Define a method to run all the test cases
  runAllTests() {
    // Create an instance of the GetStringLengthTest class
    const getStringLengthTest = new GetStringLengthTest();

    // Call the test methods
    getStringLengthTest.testLowerCase();
    getStringLengthTest.testUpperCase();
    getStringLengthTest.testMixedCase();
    getStringLengthTest.testNumbers();
    getStringLengthTest.testSpecialCharacters();
  }
}

// Create an instance of the GetStringLengthTestRunner class and call the runAllTests method
const getStringLengthTestRunner = new GetStringLengthTestRunner();
getStringLengthTestRunner.runAllTests();
