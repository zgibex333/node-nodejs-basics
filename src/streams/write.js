import * as url from "url";
import { join } from "path";
import { createWriteStream } from "fs";

const write = async () => {
  const pathToWrite = join(
    url.fileURLToPath(new URL(".", import.meta.url)),
    "files",
    "fileToWrite.txt"
  );
  const writeStream = createWriteStream(pathToWrite);
  process.stdin.on("data", (chunk) => {
    writeStream.write(chunk);
    // process.exit();
  });
};

await write();
