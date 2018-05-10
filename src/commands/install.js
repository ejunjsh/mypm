import program from "commander";
import runnpm from '../runnpm';

program
.command("install")
.option('-s, --save', '')
.option('-g, --global', '')
.description('execute the given remote cmd')
  .action(function(cmd, options){
    runnpm(()=>{
      console.log("end");
    });
  }).on('--help', function() {
    console.log('  Examples:');
    console.log();
    console.log('    $ deploy exec sequential');
    console.log('    $ deploy exec async');
    console.log();
  });