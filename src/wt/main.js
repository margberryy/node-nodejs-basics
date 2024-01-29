import { Worker } from "worker_threads";
import os from "os";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const performCalculations = async () => {
  const currentFilePath = fileURLToPath(import.meta.url);
  const currentFolderPath = dirname(currentFilePath);
  const workerPath = join(currentFolderPath, "worker.js");

  const numWorkers = os.cpus().length; // Get the number of logical CPU cores
  const workerPromises = [];
  const results = [];

  const createWorkerPromise = (i) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath, {
        workerData: i + 10,
      });

      worker.on("message", (result) => {
        results[i] = result;
        resolve();
      });
    });
  };

  for (let i = 0; i < numWorkers; i++) {
    workerPromises.push(createWorkerPromise(i));
  }

  await Promise.all(workerPromises); // Wait for all worker promises to resolve

  console.log(results);
};

await performCalculations();
