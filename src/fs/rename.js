import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const rename = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const sourceFile = `${currentFolderPath}/files/wrongFilename.txt`;
  const destinationFile = `${currentFolderPath}/files/properFilename.md`;

  if (!fs.existsSync(sourceFile) || fs.existsSync(destinationFile)) {
    throw new Error("FS operation failed");
  }
  fs.renameSync(sourceFile, destinationFile);
  console.log("File renamed successfully.");
};

await rename();
