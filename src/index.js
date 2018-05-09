import program from "commander";
import './commands';

program
  .action(function(env){
     require("./runnpm");
  });

console.log(process.argv);

program.parse(process.argv);