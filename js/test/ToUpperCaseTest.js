class ToUpperCaseTest {
  constructor() {}

  // Define a test case for the toUpperCase method with a lowercase string
  testLowerCase() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("the quick brown fox jumps over the lazy dog.");

    // Define the expected output for the toUpperCase method
    const expectedOutput = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.";

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator.toUpperCase);
  }

  // Define a test case for the toUpperCase method with an uppercase string
  testUpperCase() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");

    // Define the expected output for the toUpperCase method
    const expectedOutput = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.";

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator.toUpperCase);
  }

  // Define a test case for the toUpperCase method with a mixed-case string
  testMixedCase() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.");

    // Define the expected output for the toUpperCase method
    const expectedOutput = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.";

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator.toUpperCase);
  }

  // Define a test case for the toUpperCase method with a string containing numbers
  testNumbers() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG123");

    // Define the expected output for the toUpperCase method
    const expectedOutput = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG123";

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator.toUpperCase);
  }
}
