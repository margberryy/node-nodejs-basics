import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const read = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const filePath = `${currentFolderPath}/files/fileToRead.txt`;
  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  const fileContent = fs.readFileSync(filePath, "utf8");
  console.log("File content:");
  console.log(fileContent);
};

await read();
