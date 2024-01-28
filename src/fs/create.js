import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const create = async () => {
  const content = "I am fresh and young";
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = dirname(currentFilePath);
  const filePath = `${currentFolderPath}/files/fresh.txt`;

  try {
    await fs.promises.access(filePath, fs.constants.F_OK);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.promises.writeFile(filePath, content);
      console.log("File created successfully!");
    } else {
      throw error;
    }
  }
};

await create();
