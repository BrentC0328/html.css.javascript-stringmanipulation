class CapitalizeFirstLetterTest {
  constructor() {}

  // Define a test case for the capitalizeFirstLetter method with a lowercase string
  testLowerCase() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("the quick brown fox jumps over the lazy dog.");

    // Define the expected output for the capitalizeFirstLetter method
    const expectedOutput = "The quick brown fox jumps over the lazy dog.";

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator.capitalizeFirstLetter);
  }

  // Define a test case for the capitalizeFirstLetter method with an uppercase string
  testUpperCase() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");

    // Define the expected output for the capitalizeFirstLetter method
    const expectedOutput = "The quick brown fox jumps over the lazy dog.";

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator.capitalizeFirstLetter);
  }

  // Define a test case for the capitalizeFirstLetter method with a mixed-case string
  testMixedCase() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.");

    // Define the expected output for the capitalizeFirstLetter method
    const expectedOutput = "The quick brown fox jumps over the lazy dog.";

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator.capitalizeFirstLetter);
  }
}