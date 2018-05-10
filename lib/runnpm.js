"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = runnpm;

var _fs = require("fs");

var fs = _interopRequireWildcard(_fs);

var _path = require("path");

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function runnpm(callback) {
    process.on("exit", callback);
    if (fs.existsSync(path.resolve(__dirname, "../../npm/bin/npm-cli.js"))) {
        require("../../npm/bin/npm-cli.js");
    } else {
        console.log("cannot find the latest npm,please use npm install npm -g to update new one.");
        process.exit(0);
    }
}