function test(expectedOutput, func, ...args) {
  console.log(`Testing \`${func.name}\``);
  console.log(`arguments: ${args}`);
  let output = func(...args);
  let pass = output === expectedOutput;
  console.log(`output = \n${output}`);
  console.log(`expected = \n${expectedOutput}`);
  console.log(`test pass = ${pass}`);
  console.log("------------------------------------");
  console.log("------------------------------------");
}
