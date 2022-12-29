class ArrayToStringTestRunner {
  constructor() {}

  // Define a method to run all the test cases
  runAllTests() {
    // Create an instance of the ArrayToStringTest class
    const arrayToStringTest = new ArrayToStringTest();

    // Call the test methods
    arrayToStringTest.testLowerCase();
    arrayToStringTest.testUpperCase();
    arrayToStringTest.testMixedCase();
    arrayToStringTest.testNumbers();
    arrayToStringTest.testSpecialCharacters();
  }
}

// Create an instance of the ArrayToStringTestRunner class and call the runAllTests method
const arrayToStringTestRunner = new ArrayToStringTestRunner();
arrayToStringTestRunner.runAllTests();
