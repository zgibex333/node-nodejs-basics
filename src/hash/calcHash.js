import * as url from "url";
import { join } from "path";
import { createHash } from "crypto";
import { promises } from "fs";

const calculateHash = async () => {
  // Write your code here
  const targetPath = join(
    url.fileURLToPath(new URL(".", import.meta.url)),
    "files",
    "fileToCalculateHashFor.txt"
  );
  const data = await promises.readFile(targetPath, { encoding: "utf-8" });
  console.log(createHash("sha256").update(data).digest("hex"));
};

await calculateHash();
