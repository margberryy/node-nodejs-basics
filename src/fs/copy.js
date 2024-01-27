import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const copy = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = path.dirname(currentFilePath);
  const sourceFolder = `${currentFolderPath}/files`;
  const destinationFolder = `${currentFolderPath}/files_copy`;
  if (!fs.existsSync(sourceFolder) || fs.existsSync(destinationFolder)) {
    throw new Error("FS operation failed");
  }

  fs.mkdirSync(destinationFolder);
  const files = fs.readdirSync(sourceFolder);
  files.forEach((file) => {
    const sourcePath = path.join(sourceFolder, file);
    const destinationPath = path.join(destinationFolder, file);
    fs.copyFileSync(sourcePath, destinationPath);
  });
};

await copy();
