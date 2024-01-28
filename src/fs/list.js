import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const list = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const sourceFolder = `${currentFolderPath}/files`;

  try {
    await fs.promises.access(sourceFolder, fs.constants.F_OK);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }

  try {
    const files = await fs.promises.readdir(sourceFolder);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.error("An error occurred while listing the files:", error);
  }
};

await list();
