import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

const create = async () => {
  const content = "I am fresh and young";
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = dirname(currentFilePath);
  const filePath = `${currentFolderPath}/files/fresh.txt`;
  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed");
  }
  fs.writeFile(filePath, content, (error) => {
    if (error) {
      console.error("An error occurred while creating the file:", error);
    } else {
      console.log("File created successfully!");
    }
  });
};

await create();
