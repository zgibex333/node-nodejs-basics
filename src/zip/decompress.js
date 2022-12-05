import * as url from "url";
import { unzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { promisify } from "util";

const decompress = async () => {
  // Write your code here
  const unzipFile = promisify(unzip);
  const dir = url.fileURLToPath(new URL(".", import.meta.url));
  const sourcePath = join(dir, "files", "archive.gz");
  const destPath = join(dir, "files", "fileToCompress.txt");
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destPath);
  source.on("data", async (chunk) => {
    try {
      const data = await unzipFile(chunk);
      destination.write(data);
    } catch (err) {
      console.log(err);
    }
  });
};

await decompress();
