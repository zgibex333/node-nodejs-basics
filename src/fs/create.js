import * as url from "url";
import { promises } from "fs";
import { join } from "path";

const create = async () => {
  const dirname = url.fileURLToPath(new URL(".", import.meta.url));
  const targetPath = join(dirname, "files", "fresh.txt");
  const exists = !!(await promises.stat(targetPath).catch((_) => false));
  if (exists) throw new Error("FS operation failed");
  try {
    await promises.appendFile(targetPath, "I am fresh and young");
  } catch (err) {
    console.log(err);
  }
};

await create();
