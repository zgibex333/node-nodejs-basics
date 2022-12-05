import { join } from "path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
  // Write your code here
  const mySource = join(
    fileURLToPath(new URL(".", import.meta.url)),
    "files",
    "script.js"
  );
  const child = spawn("node", [mySource, args]);
  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
  process.stdin.on("data", (data) => {
    child.stdin.write(data);
  });
};

spawnChildProcess([1, 2, 3]);
