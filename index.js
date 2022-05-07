const http = require('http')
const url = require('url')
const fs = require('fs')
const Jimp = require('jimp')


http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('index.html', 'utf8', (err, html) => {
            res.end(html)
        })
    }

    if (req.url == '/estilos') {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        fs.readFile('estilos.css', (err, css) => {
            res.end(css)
        })
    }

    if (req.url.includes('/cambiar-imagen')) {
        const parametros = url.parse(req.url, true).query
        const imagenUrl = parametros.url
        Jimp.read(`${imagenUrl}`, (err, imagen) => {
            imagen
                .resize(350, Jimp.AUTO)
                .greyscale()
                .quality(60)
                .writeAsync('newimg.jpg')
                .then(() => {
                    fs.readFile('newimg.jpg', (err, Imagen) => {
                        res.writeHead(200, { 'Content-Type': 'image/jpeg' })
                        res.end(Imagen)
                    })
                })
        })
    }
}).listen(3000, () => console.log('Servidor ON'))