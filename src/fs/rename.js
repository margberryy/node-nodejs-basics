import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const rename = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const sourceFile = path.join(currentFolderPath, "files", "wrongFilename.txt");
  const destinationFile = path.join(
    currentFolderPath,
    "files",
    "properFilename.md"
  );

  try {
    await fs.promises.access(sourceFile, fs.constants.F_OK);
    await fs.promises.access(destinationFile, fs.constants.F_OK);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.promises.rename(sourceFile, destinationFile);
        console.log("File renamed successfully.");
      } catch (error) {
        throw new Error("FS operation failed");
      }
    } else {
      console.error("An error occurred:", error);
    }
  }
};

await rename();
