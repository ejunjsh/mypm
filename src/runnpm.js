import * as fs from "fs";
import * as path from "path";

export default function runnpm(callback){
    process.on("exit",callback);
    if(fs.existsSync(path.resolve(__dirname,"../../npm/bin/npm-cli.js"))){
        require("../../npm/bin/npm-cli.js");
    }
    else{
        console.log("cannot find the latest npm,please use npm install npm -g to update new one.");
        process.exit(0);
    }
}
