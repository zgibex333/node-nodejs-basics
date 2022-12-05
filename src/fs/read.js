import * as url from "url";
import { promises } from "fs";
import { join } from "path";

const read = async () => {
  // Write your code here
  const dir = url.fileURLToPath(new URL(".", import.meta.url));
  const src = join(dir, "files", "fileToRead.txt");
  const fileExist = !!(await promises.stat(src).catch((_) => false));
  if (!fileExist) {
    throw new Error("FS operation failed");
  }
  try {
    const contents = await promises.readFile(src, { encoding: "utf-8" });
    console.log(contents);
  } catch (err) {
    console.log(err);
  }
};

await read();
