const parseEnv = () => {
  // Write your code here
  const envObj = process.env;
  for (let key in envObj) {
    if (key.includes("RSS_")) {
      console.log(`${key}=${envObj[key]}`);
    }
  }
};

parseEnv();
