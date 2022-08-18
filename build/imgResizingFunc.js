"use strict";
//a function for using Sharp module to resize the image
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
// import { promises as fspromises } from 'fs';
const fs_1 = __importDefault(require("fs"));
function resizeImg(name, width, height) {
    return new Promise((resolve, reject) => {
        //new image name for caching
        const newName = `${name}-${width}-${height}`;
        /*if condition to use cache to restore image thas has already resized with the same sizes and if not exist use sharp to resize it */
        if (fs_1.default.existsSync(newName)) {
            resolve(`./images/thumbnail/${newName}.jpg`);
        }
        else {
            (0, sharp_1.default)(`./images/${name}.jpg`)
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
exports.default = resizeImg;
