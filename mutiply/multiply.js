//requerides -------************
const fs = require('fs');



let createFile = (base) => {
    return new Promise ((resolve, reject) => {

        if(!Number(base)) {
            reject(`is not number`);
            return;
        }
            
        let data = '';

        for (let i = 1; i <= 10; i++) {
            data +=`${base} * ${i} = ${base*i}\n`;
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tables/table-${base}.txt`);
        });
    });
}

module.exports = {createFile}