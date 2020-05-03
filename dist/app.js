"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
const test = {
    hey: { ho: 13 }
};
app.use((error, req, res, next) => {
    var _a;
    console.error(error.stack);
    const data = (_a = test.hey) === null || _a === void 0 ? void 0 : _a.ho;
    /* const data2=test.ha?.ho; */
    res.status(500).send('something went wrong ' + data);
});
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map