'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

require('./commands');

var _runnpm = require('./runnpm');

var _runnpm2 = _interopRequireDefault(_runnpm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version(require("../package.json").version, '-v, --version').action(function (env) {
  (0, _runnpm2.default)(function () {
    console.log("end");
  });
});

_commander2.default.parse(process.argv);