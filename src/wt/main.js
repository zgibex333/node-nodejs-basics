import * as url from "url";
import { cpus } from "os";
import { Worker } from "worker_threads";
import { join, resolve } from "path";

const performCalculations = async () => {
  // Write your code here
  const workerSrc = join(
    url.fileURLToPath(new URL(".", import.meta.url)),
    "worker.js"
  );
  const cpusAmount = cpus();
  let startValue = 10;
  const promisesArray = await Promise.allSettled(
    cpusAmount.map((cpu) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(workerSrc, { workerData: startValue++ });
        worker.on("message", (data) => resolve(data));
        worker.on("error", (data) => reject(data));
      });
    })
  );
  const results = promisesArray.map((result) => ({
    status: result.status === "fulfilled" ? "resolved" : "error",
    data: typeof result.value === "number" ? result.value : null,
  }));
  console.log(results);
};

await performCalculations();

// {status: 'resolved' | 'error', data: number}
