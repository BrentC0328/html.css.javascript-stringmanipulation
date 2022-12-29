function test(expectedOutput, invoker, func, ...args) {
  console.log(`Testing \`${func.name}\``);
  console.log(`arguments: ${args}`);
  const output = func.bind(invoker)(...args);
  const pass = output === expectedOutput;
  console.log(`output = \n${output}`);
  console.log(`expected = \n${expectedOutput}`);
  console.log(`test pass = ${pass}`);
  console.log("------------------------------------");
  console.log("------------------------------------");
}


function testFunction(expectedOutput, func, ...args) {
  console.log(`Testing \`${func.name}\``);
  console.log(`arguments: ${args}`);
  const output = func(...args);
  const pass = output === expectedOutput;
  console.log(`output = \n${output}`);
  console.log(`expected = \n${expectedOutput}`);
  console.log(`test pass = ${pass}`);
  console.log("------------------------------------");
  console.log("------------------------------------");
}
