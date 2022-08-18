"use strict";
//Testing functions and endpoints
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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const imgResizingFunc_1 = __importDefault(require("../imgResizingFunc"));
const width = 20;
const height = 20;
//testing tha resized image data to see if its valid data
it('takes image name,width and hieght then return a new path of resized image', () => __awaiter(void 0, void 0, void 0, function* () {
    const path = yield (0, imgResizingFunc_1.default)('fjord', width, height);
    expect(path).toEqual(`./images/thumbnail/fjord-${width}-${height}.jpg`);
}));
const request = (0, supertest_1.default)(index_1.default);
//testing image endpoint using superTest
describe('Test the endpoint response', () => {
    it('get request for the api endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/image');
        expect(response.status).toBe(200);
    }));
});
