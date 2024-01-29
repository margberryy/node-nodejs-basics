const parseEnv = () => {
  const prefix = "RSS_";
  const envVariables = Object.keys(process.env)
    .filter((key) => {
      return key.startsWith(prefix);
    })
    .map((key) => `RSS_${key.slice(prefix.length)}=${process.env[key]}`)
    .join("; ");

  console.log(envVariables);
};

parseEnv();
