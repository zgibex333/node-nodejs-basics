import * as url from "url";
import { join } from "path";
import { promises } from "fs";

const rename = async () => {
  // Write your code here
  const dir = url.fileURLToPath(new URL(".", import.meta.url));
  const src = join(dir, "files", "wrongFilename.txt");
  const renamedDest = join(dir, "files", "properFilename.md");
  const renamedExists = !!(await promises
    .stat(renamedDest)
    .catch((e) => false));
  const targetExists = !!(await promises.stat(src).catch((e) => false));
  if (renamedExists || !targetExists) throw new Error("FS operation failed");
  try {
    await promises.rename(src, renamedDest);
  } catch (err) {
    console.log(err);
  }
};

await rename();
