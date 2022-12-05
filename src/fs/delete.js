import * as url from "url";
import { join } from "path";
import { promises } from "fs";

const remove = async () => {
  // Write your code here
  const dirname = url.fileURLToPath(new URL(".", import.meta.url));
  const target = join(dirname, "files", "fileToRemove.txt");
  const exists = !(await promises.access(target).catch((_) => true));
  if (!exists) throw new Error("FS operation failed");
  try {
    await promises.rm(target);
  } catch (err) {
    console.log(err);
  }
};

await remove();
