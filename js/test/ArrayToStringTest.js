class ArrayToStringTest {
    constructor() {}
  
    // Define a test case for the arrayToString method with an array of lowercase strings
    testLowerCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]);
  
      // Define the expected output for the arrayToString method
      const expectedOutput = "the quick brown fox jumps over the lazy dog.";
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator.arrayToString);
    }
  
    // Define a test case for the arrayToString method with an array of uppercase strings
    testUpperCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation(["THE", "QUICK", "BROWN", "FOX", "JUMPS", "OVER", "THE", "LAZY", "DOG."]);
  
      // Define the expected output for the arrayToString method
      const expectedOutput = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.";
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator.arrayToString);
    }
  
    // Define a test case for the arrayToString method with an array of mixed-case strings
    testMixedCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation(["ThE", "QuIcK", "BrOwN", "fOx", "JuMpS", "OvEr", "ThE", "LaZy", "DoG."]);
  
      // Define the expected output for the arrayToString method
      const expectedOutput = "ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.";
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator.arrayToString);
    } 
}  