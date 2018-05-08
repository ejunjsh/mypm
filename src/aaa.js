export default function npmRun(action,args){
    var child_process = require('child_process');
    var spawnObj = child_process.spawn(process.platform === "win32" ? "npm.cmd" : "npm", [action],{encoding: 'utf-8'});
    spawnObj.stdout.pipe(process.stdout);
    spawnObj.stderr.pipe(process.stderr);
    process.stdin.pipe(spawnObj.stdin);
    // spawnObj.stdout.on('data', function(chunk) {
    //     console.log(chunk.toString("utf-8"));
    // });
    // spawnObj.stderr.on('data', (chunk) => {
        
    //   console.log(chunk.toString("utf-8"));
    // });
    spawnObj.on('close', function(code) {
    });
    spawnObj.on('error', (code) => {
        
    });
}