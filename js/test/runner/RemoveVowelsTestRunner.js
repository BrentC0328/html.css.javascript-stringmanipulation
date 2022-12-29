class RemoveVowelsTestRunner {
  constructor() {}

  // Define a method to run all the test cases
  runAllTests() {
    // Create an instance of the RemoveVowelsTest class
    const removeVowelsTest = new RemoveVowelsTest();

    // Call the test methods
    removeVowelsTest.testLowerCase();
    removeVowelsTest.testUpperCase();
    removeVowelsTest.testMixedCase();
    removeVowelsTest.testNumbers();
    removeVowelsTest.testSpecialCharacters();
  }
}

// Create an instance of the RemoveVowelsTestRunner class and call the runAllTests method
const removeVowelsTestRunner = new RemoveVowelsTestRunner();
removeVowelsTestRunner.runAllTests();
