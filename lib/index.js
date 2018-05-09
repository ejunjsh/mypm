"use strict";

var _commander = require("commander");

var _commander2 = _interopRequireDefault(_commander);

require("./commands");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.action(function (env) {
  require("./runnpm");
});

console.log(process.argv);

_commander2.default.parse(process.argv);