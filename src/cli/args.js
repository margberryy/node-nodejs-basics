const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = {};

  for (let i = 0; i < args.length; i += 2) {
    const propertyName = args[i].slice(2);
    const propertyValue = args[i + 1];
    parsedArgs[propertyName] = propertyValue;
  }

  Object.entries(parsedArgs).forEach(([propertyName, propertyValue]) => {
    console.log(`${propertyName} is ${propertyValue}`);
  });
};

parseArgs();
