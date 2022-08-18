//a function for using Sharp module to resize the image

import sharp from 'sharp';
// import { promises as fspromises } from 'fs';
import fs from 'fs';

function resizeImg(
  name: string,
  width: number,
  height: number
): Promise<string> {
  return new Promise((resolve, reject) => {
    //new image name for caching
    const newName = `${name}-${width}-${height}`;
    /*if condition to use cache to restore image thas has already resized with the same sizes and if not exist use sharp to resize it */
    if (fs.existsSync(newName)) {
      resolve(`./images/thumbnail/${newName}.jpg`);
    } else {
      sharp(`./images/${name}.jpg`)
        .resize({
          width: width,
          height: height,
        })
        .toFile(`./images/thumbnail/${newName}.jpg`)
        .then(() => {
          resolve(`./images/thumbnail/${newName}.jpg`);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
}

export default resizeImg;
