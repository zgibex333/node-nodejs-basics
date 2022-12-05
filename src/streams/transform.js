import { Transform } from "stream";

const transform = async () => {
  // Write your code here
  const reverse = Transform({
    transform(chunk, encoding, callback) {
      callback(null, `${chunk.reverse()}\n`);
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
