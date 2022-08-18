"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const express_1 = __importDefault(require("express"));
const imgResizingFunc_1 = __importDefault(require("../../imgResizingFunc"));
const routes = express_1.default.Router();
routes.get('/image', (req, res) => {
    try {
        const name = req.query.name;
        const widthstring = req.query.width;
        const heightstring = req.query.height;
        const width = parseInt(widthstring);
        const height = parseInt(heightstring);
        (0, imgResizingFunc_1.default)(name, width, height)
            .then((imgPath) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(`imgPath is${imgPath}`);
            const image = yield fs_1.promises.readFile(imgPath).catch((error) => {
                throw error;
            });
            res.end(image);
        }))
            .catch((err) => {
            res.send(err.message);
        });
    }
    catch (error) {
        console.log('i catched some errors');
        res.send(error);
    }
});
exports.default = routes;
