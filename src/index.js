import program from "commander";
import './commands';
import runnpm from './runnpm';

program
  .version(require("../package.json").version, '-v, --version')
  .action(function(env){
    runnpm(()=>{
      console.log("end");
    });
  })

program.parse(process.argv);