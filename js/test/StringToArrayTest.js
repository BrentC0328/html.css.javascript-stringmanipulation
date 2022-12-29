class StringToArrayTest {
  constructor() {}

  // Define a test case for the stringToArray method with a lowercase string
  testLowerCase() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("the quick brown fox jumps over the lazy dog.");

    // Define the expected output for the stringToArray method
    const expectedOutput = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."];

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator, manipulator.stringToArray);
  }

  // Define a test case for the stringToArray method with an uppercase string
  testUpperCase() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");

    // Define the expected output for the stringToArray method
    const expectedOutput = ["THE", "QUICK", "BROWN", "FOX", "JUMPS", "OVER", "THE", "LAZY", "DOG."];

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator, manipulator.stringToArray);
  }

  // Define a test case for the stringToArray method with a mixed-case string
  testMixedCase() {
    // Create an instance of the StringManipulation class
    const manipulator = new StringManipulation("ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.");

    // Define the expected output for the stringToArray method
    const expectedOutput = ["ThE", "QuIcK", "BrOwN", "fOx", "JuMpS", "OvEr", "ThE", "LaZy", "DoG."];

    // Call the test function and pass in the method name, expected output, and the method being tested
    test(expectedOutput, manipulator, manipulator.stringToArray);
  } 
}  