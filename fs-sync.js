const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const seond = readFileSync('./content/second.txt', 'utf-8');

console.log(first, seond);

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first} ${seond}`,
    {
        flag: 'a'
    }
)