import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const rename = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const sourceFile = `${currentFolderPath}/files/wrongFilename.txt`;
  const destinationFile = `${currentFolderPath}/files/properFilename.md`;

  try {
    await fs.promises.access(sourceFile, fs.constants.F_OK);
    if (await fs.promises.access(destinationFile, fs.constants.F_OK)) {
      throw new Error("FS operation failed");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }

  try {
    await fs.promises.rename(sourceFile, destinationFile);
    console.log("File renamed successfully.");
  } catch (error) {
    console.error("An error occurred while renaming the file:", error);
  }
};

await rename();
