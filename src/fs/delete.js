import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const remove = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const filePath = `${currentFolderPath}/files/fileToRemove.txt`;

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    await fs.promises.unlink(filePath);
    console.log("File deleted successfully.");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }
};

await remove();
