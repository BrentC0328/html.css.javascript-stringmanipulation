class GetStringLengthTest {
    constructor() {}
  
    // Define a test case for the getStringLength method with a lowercase string
    testLowerCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("the quick brown fox jumps over the lazy dog.");
  
      // Define the expected output for the getStringLength method
      const expectedOutput = 44;
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.getStringLength);
    }
  
    // Define a test case for the getStringLength method with an uppercase string
    testUpperCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  
      // Define the expected output for the getStringLength method
      const expectedOutput = 44;
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.getStringLength);
    }
  
    // Define a test case for the getStringLength method with a mixed-case string
    testMixedCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.");
  
      // Define the expected output for the getStringLength method
      const expectedOutput = 44;
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.getStringLength);
    }
  
    // Define a test case for the getStringLength method with a string containing numbers
    testNumbers() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG123");
  
      // Define the expected output for the getStringLength method
      const expectedOutput = 46;
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.getStringLength);
    }
  
    // Define a test case for the getStringLength method with an empty string
    testEmpty() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("");
  
      // Define the expected output for the getStringLength method
      const expectedOutput = 0;
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.getStringLength);
    }
}