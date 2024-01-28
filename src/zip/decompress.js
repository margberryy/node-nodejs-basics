import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const decompress = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = dirname(currentFilePath);
  const filePath = join(currentFolderPath, "files", "fileToCompress.txt");
  const archivePath = join(currentFolderPath, "files", "archive.gz");

  const readStream = fs.createReadStream(archivePath);
  const writeStream = fs.createWriteStream(filePath);
  const gunzipStream = zlib.createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("Decompression completed.");
  });

  writeStream.on("error", (error) => {
    console.error("An error occurred:", error);
  });
};

await decompress();
