import * as url from "url";
import { createGzip } from "zlib";
import { createReadStream, createWriteStream, promises } from "fs";
import { join } from "path";
import { pipeline } from "stream";
import { promisify } from "util";

const compress = async () => {
  // Write your code here
  const pipe = promisify(pipeline);
  const gzip = createGzip();
  const dir = url.fileURLToPath(new URL(".", import.meta.url));
  const sourcePath = join(dir, "files", "fileToCompress.txt");
  const destPath = join(dir, "files", "archive.gz");
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destPath);
  try {
    await pipe(source, gzip, destination);
    await promises.rm(sourcePath);
  } catch (err) {
    console.log(err);
  }
};

await compress();
