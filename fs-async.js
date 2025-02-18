const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.error(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first} ${second}`,
            {
                flag: 'a'
            },
            (err, result) => {
                if (err) {
                    console.error(err);
                }
                console.log(result);
            }
        )
    })
})