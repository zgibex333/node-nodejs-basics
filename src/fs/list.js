import * as url from "url";
import { promises } from "fs";
import { join } from "path";

const list = async () => {
  // Write your code here
  const dir = url.fileURLToPath(new URL(".", import.meta.url));
  const src = join(dir, "files");
  const folderExists = !!(await promises.stat(src).catch((_) => false));
  if (!folderExists) {
    throw new Error("FS operation failed");
  }
  try {
    const files = await promises.readdir(src);
    for (let filename of files) {
      console.log(filename);
    }
  } catch (err) {
    console.log(err);
  }
};

await list();
