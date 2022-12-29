class RepeatStringTestRunner {
  constructor() {}

  // Define a method to run all the test cases
  runAllTests() {
    // Create an instance of the RepeatStringTest class
    const repeatStringTest = new RepeatStringTest();

    // Call the test methods
    repeatStringTest.testLowerCase();
    repeatStringTest.testUpperCase();
    repeatStringTest.testMixedCase();
  }
}

// Create an instance of the RepeatStringTestRunner class and call the runAllTests method
const repeatStringTestRunner = new RepeatStringTestRunner();
repeatStringTestRunner.runAllTests();
