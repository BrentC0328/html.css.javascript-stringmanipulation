class RemovePunctuationTestRunner {
  constructor() {}

  // Define a method to run all the test cases
  runAllTests() {
    // Create an instance of the RemovePunctuationTest class
    const removePunctuationTest = new RemovePunctuationTest();

    // Call the test methods
    removePunctuationTest.testLowerCase();
    removePunctuationTest.testUpperCase();
    removePunctuationTest.testMixedCase();
  }
}

// Create an instance of the RemovePunctuationTestRunner class and call the runAllTests method
const removePunctuationTestRunner = new RemovePunctuationTestRunner();
removePunctuationTestRunner.runAllTests();
