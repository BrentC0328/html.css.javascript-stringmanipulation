class ToUpperCaseTestRunner {
    constructor() {}
  
    // Define a method to run all the test cases
    runAllTests() {
      // Create an instance of the ToUpperCaseTest class
      const toUpperCaseTest = new ToUpperCaseTest();
  
      // Call the test methods
      toUpperCaseTest.testLowerCase();
      toUpperCaseTest.testUpperCase();
      toUpperCaseTest.testMixedCase();
    }
  }
  
  // Create an instance of the ToUpperCaseTestRunner class and call the runAllTests method
  const toUpperCaseTestRunner = new ToUpperCaseTestRunner();
  toUpperCaseTestRunner.runAllTests();
  