class StringToArrayTestRunner {
  constructor() {}

  // Define a method to run all the test cases
  runAllTests() {
    // Create an instance of the StringToArrayTest class
    const stringToArrayTest = new StringToArrayTest();

    // Call the test methods
    stringToArrayTest.testLowerCase();
    stringToArrayTest.testUpperCase();
    stringToArrayTest.testMixedCase();
    stringToArrayTest.testNumbers();
    stringToArrayTest.testSpecialCharacters();
  }
}

// Create an instance of the StringToArrayTestRunner class and call the runAllTests method
const stringToArrayTestRunner = new StringToArrayTestRunner();
stringToArrayTestRunner.runAllTests();
