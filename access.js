const yargs = require('yargs')
const child = require('child_process')

// Definir las credenciales de acceso
const key = '123'
const argv = yargs
    .command(
              'login',
       
        'Comando para acceder para modificar una imagen',
        {
            
            key: {
                describe: 'Contraseña',
                demand: true,
                alias: 'p',
            }
        },
        (args) => {
            if (args.key == key) {
                child.exec('node index.js', (err, stdout) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(stdout)
                    }
                })
            } else {
                console.log('Credenciales incorrectas')
            }
        }
    )
    .help().argv
