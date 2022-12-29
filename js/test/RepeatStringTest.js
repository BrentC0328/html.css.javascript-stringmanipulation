class RepeatStringTest {
    constructor() {}
  
    // Define a test case for the repeatString method with a lowercase string and repeat count of 2
    testLowerCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("the quick brown fox jumps over the lazy dog.");
  
      // Define the expected output for the repeatString method
      const expectedOutput = "the quick brown fox jumps over the lazy dog.the quick brown fox jumps over the lazy dog.";
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.repeatString, 2);
    }
  
    // Define a test case for the repeatString method with an uppercase string and repeat count of 3
    testUpperCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  
      // Define the expected output for the repeatString method
      const expectedOutput = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.";
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.repeatString, 3);
    }
  
    // Define a test case for the repeatString method with a mixed-case string and repeat count of 4
    testMixedCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.");
  
      // Define the expected output for the repeatString method
      const expectedOutput = "ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.";
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.repeatString, 4);
    }
}  