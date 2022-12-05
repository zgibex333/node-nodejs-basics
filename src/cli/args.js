const parseArgs = () => {
  // Write your code here
  const cliArgs = process.argv;
  for (let i = 0; i < cliArgs.length; i += 2) {
    if (cliArgs[i].includes("--")) {
      console.log(`${cliArgs[i].replace(/\-/g, "")} is ${cliArgs[i + 1]}`);
    }
  }
};

parseArgs();
