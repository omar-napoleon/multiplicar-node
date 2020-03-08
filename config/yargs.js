const argv = require('yargs')
    .command('list','print to console tables mitiply', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

    module.exports = { argv }