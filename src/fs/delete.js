import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const remove = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const filePath = `${currentFolderPath}/files/fileToRemove.txt`;

  if (!fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  fs.unlinkSync(filePath);
  console.log("File deleted successfully.");
};

await remove();
