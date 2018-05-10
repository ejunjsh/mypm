# mypm

a wrapper of npm. it just pass the arguments to `npm` to do what `npm` to do. for example `mypm install express` equals to `npm install express`.


## install

    npm install mypm -g

## why to create this stuff.

if you want to extend `npm` or add some command to `npm`, you just need to extend the `mypm`, just clone the code, add some command code.

for example: if you want to extend the `init` command,just add init command code,the fake code is like below:

    src/commands/init.js
    //do something before init
    preinit();
    //do init same as `npm init`
    npminit();
    // do something after init, you can add some logic to create some template code.
    postinit();

all is done, build the code and publish to npm,then reinstall the mypm `npm install mypm -g`,ok,you can use the new init command:

    mypm init
    


