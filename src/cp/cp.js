import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const spawnChildProcess = async (args) => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = dirname(currentFilePath);
  const filePath = join(currentFolderPath, "files", "script.js");

  const childProcess = spawn("node", [filePath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([123, 45]);
