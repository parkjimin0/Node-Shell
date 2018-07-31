module.exports = {
    pwd: process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();
        if (cmd === 'pwd') {
            // console.log(`Current directory: ${process.cwd()}`);
            process.stdout.write(`Current directory: ${process.cwd()}`)
        } else {

            process.stdout.write('You typed: ' + cmd);
            process.stdout.write('\nprompt > ');
        }

    })

};


