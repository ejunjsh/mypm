"use strict";

var _commander = require("commander");

var _commander2 = _interopRequireDefault(_commander);

var _runnpm = require("../runnpm");

var _runnpm2 = _interopRequireDefault(_runnpm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.command("install").option('-s, --save', '').option('-g, --global', '').description('execute the given remote cmd').action(function (cmd, options) {
  (0, _runnpm2.default)(function () {
    console.log("end");
  });
}).on('--help', function () {
  console.log('  Examples:');
  console.log();
  console.log('    $ deploy exec sequential');
  console.log('    $ deploy exec async');
  console.log();
});