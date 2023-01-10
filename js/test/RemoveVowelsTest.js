class RemoveVowelsTest {
    constructor() {}
  
    // Define a test case for the removeVowels method with a lowercase string
    testLowerCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("the quick brown fox jumps over the lazy dog.");
  
      // Define the expected output for the removeVowels method
      const expectedOutput = "th qck brwn fx jmps vr th lzy dg.";
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.removeVowels);
    }
  
    // Define a test case for the removeVowels method with an uppercase string
    testUpperCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  
      // Define the expected output for the removeVowels method
      const expectedOutput = "TH QCK BRWN FX JMPS VR TH LZY DG.";
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.removeVowels);
    }
  
    // Define a test case for the removeVowels method with a mixed-case string
    testMixedCase() {
      // Create an instance of the StringManipulation class
      const manipulator = new StringManipulation("ThE QuIcK BrOwN fOx JuMpS OvEr ThE LaZy DoG.");
  
      // Define the expected output for the removeVowels method
      const expectedOutput = "Th QcK BrwN fx JMpS vr Th LZy DG.";
  
      // Call the test function and pass in the method name, expected output, and the method being tested
      test(expectedOutput, manipulator, manipulator.removeVowels);
    }
}