// constante el paquete child_process
const yargs = require('yargs')

// constante el paquete child_process
const child = require('child_process')

// Definir las credenciales de acceso
const key = '123'
const argv = yargs
    .command(
        // Paso 3
        'login',
        // Paso 4
        'Comando para acceder',
        {
            
            key: {
                describe: 'Contraseña',
                demand: true,
                alias: 'p',
            }
        },
        (args) => {
            // Paso 7
            args.key == key
                ? // Paso 8
                child.exec('node index.js', (err, stdout) => {
                    err ? console.log(err) : console.log(stdout)
                })
                : // Paso 9
                console.log('Credenciales incorrectas')
        }
    )
    .help().argv
