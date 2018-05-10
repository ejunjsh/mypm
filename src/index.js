import program from "commander";
import './commands';

program
  .version(require("../package.json").version, '-v, --version')
  .action(function(env){
     require("./runnpm");
  })

program.parse(process.argv);