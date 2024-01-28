import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const write = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = dirname(currentFilePath);
  const filePath = join(currentFolderPath, "files", "fileToWrite.txt");
  const stream = fs.createWriteStream(filePath);
  process.stdin.pipe(stream);
  console.log("Please enter some input:");

  process.stdin.on("end", () => {
    console.log("Data writing completed.");
  });

  stream.on("error", (error) => {
    console.error("An error occurred:", error);
  });
};

await write();
