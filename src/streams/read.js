import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const read = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = dirname(currentFilePath);
  const filePath = `${currentFolderPath}/files/fileToRead.txt`;

  const stream = fs.createReadStream(filePath);

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("end", () => {
    console.log("\nFile reading completed.");
  });

  stream.on("error", (error) => {
    console.error("An error occurred while reading the file:", error);
  });
};

await read();
