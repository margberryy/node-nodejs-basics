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

  await fs.promises.mkdir(destinationFolder);
  const files = await fs.promises.readdir(sourceFolder);
  for (const file of files) {
    const sourcePath = path.join(sourceFolder, file);
    const destinationPath = path.join(destinationFolder, file);
    await fs.promises.copyFile(sourcePath, destinationPath);
  }
};

await copy();
