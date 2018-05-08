import getProgram from "./program";
import './commands/install';

console.log(process.argv);

getProgram().parse(process.argv);