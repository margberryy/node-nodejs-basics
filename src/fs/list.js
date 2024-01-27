import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const list = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const sourceFolder = `${currentFolderPath}/files`;
  if (!fs.existsSync(sourceFolder)) {
    throw new Error("FS operation failed");
  }

  const files = fs.readdirSync(sourceFolder);
  files.forEach((file) => {
    console.log(file);
  });
};

await list();
