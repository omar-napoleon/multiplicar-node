//requerides
const {createFile} = require('./mutiply/multiply');
const argv = require('./config/yargs').argv;

let terminalCommand = argv._[0];

switch(terminalCommand) {
    
    case 'list':
        console.log('list');
    break;

    case 'create':
        createFile(argv.base)
            .then(file => console.log(`file created ${file}`))
            .catch(err => console.log(err));
    break;

    default:
        console.log('command not found');
    break;

}


// console.log(argv.base);
// let param = arvg[2];
// let base = param.split('=')[1];

