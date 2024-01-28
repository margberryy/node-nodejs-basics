import fs from "fs";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { dirname } from "path";

const calculateHash = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = dirname(currentFilePath);
  const filePath = `${currentFolderPath}/files/fileToCalculateHashFor.txt`;

  const stream = fs.createReadStream(filePath);
  const hash = crypto.createHash("sha256");

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    const calculatedHash = hash.digest("hex");
    console.log(calculatedHash);
  });

  stream.on("error", (error) => {
    console.error(error);
  });
};

await calculateHash();
