import * as url from "url";
import { join } from "path";
import { promises } from "fs";

const copy = async () => {
  const dir = url.fileURLToPath(new URL(".", import.meta.url));
  const src = join(dir, "files");
  const dest = join(dir, "files_copy");
  const folderExists = !!(await promises.stat(dest).catch((_) => false));
  if (folderExists) throw new Error("FS operation failed");
  try {
    await promises.mkdir(dest);
    const files = await promises.readdir(src);
    for (let file of files) {
      await promises.copyFile(join(src, file), join(dest, file));
    }
  } catch (err) {
    console.log(err);
  }
};

copy();
