import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const read = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const filePath = `${currentFolderPath}/files/fileToRead.txt`;

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }

  try {
    const fileContent = await fs.promises.readFile(filePath, "utf8");
    console.log("File content:");
    console.log(fileContent);
  } catch (error) {
    console.error("An error occurred while reading the file:", error);
  }
};

await read();
