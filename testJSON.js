import fs from 'fs';
let text = 'Hello world';
let json = JSON.stringify(text);
fs.writeFile('userCredentials.json', json, (err) => {
    if (err) {
        throw err
    }
})