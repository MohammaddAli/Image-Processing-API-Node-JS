"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeImg_1 = __importDefault(require("./routes/api/resizeImg"));
const app = (0, express_1.default)();
const port = 3000;
//use the route /api/image
app.use('/api', resizeImg_1.default);
//listen to the server on the port and start server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
