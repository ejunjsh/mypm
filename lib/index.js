"use strict";

var _commander = require("commander");

var _commander2 = _interopRequireDefault(_commander);

require("./commands");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(require("../package.json").version, '-v, --version').action(function (env) {
  require("./runnpm");
});

_commander2.default.parse(process.argv);