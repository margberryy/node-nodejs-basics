import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const compress = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = dirname(currentFilePath);
  const filePath = join(currentFolderPath, "files", "fileToCompress.txt");
  const zipPath = join(currentFolderPath, "files", "archive.gz");

  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(zipPath);
  const gzipStream = zlib.createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("Compression completed.");
  });

  writeStream.on("error", (error) => {
    console.error("An error occurred:", error);
  });
};

await compress();
