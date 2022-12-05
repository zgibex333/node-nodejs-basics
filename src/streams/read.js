import * as url from "url";
import { join } from "path";
import { createReadStream } from "fs";

const read = async () => {
  const pathToRead = join(
    url.fileURLToPath(new URL(".", import.meta.url)),
    "files",
    "fileToRead.txt"
  );
  const readStream = createReadStream(pathToRead);
  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
