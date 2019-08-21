const express = require('express'),  //importando express
    path = require('path'),
    app = express()  // constante llamada app quye está guardando el objeto express()

app.set('views', __dirname + '/views') // vistas y la ruta donde se encuentran las rutas
app.set('view engine', 'jade') // motor de plantilla o de vistas, en este casom jade

// app.use estamos haciendo uso de un middleware, en este caso el middleware se 
//llama express static y se encarga de manejar los archivos css, js, imagenes entre or¿tros
app.use(express.static(path.join(__dirname, '/public'))) // express.static('/public')


// método para obtener la ruta de la petición app.get('ruta de acceso', callback)
app.get('/', (Request, Response) => {
    Response.render('home', {
        title: 'Home',
        titulo: 'Welcome to Jagd City News'  // Para cambiar dinamicamente con el que está en el archivo home.jade  title#{title}, body h1 #{titulo}
    })
})

app.get('/economy', (Request, Response) => {
    Response.render('economy', {
        title: 'Economy',
        titulo: 'Hello Economy in Jagd City News'

    })
})

app.get('/agriculture', (Request, Response) => {
    Response.render('agriculture', {
        title: 'hola', 
        titulo: "Jagd City News"
    })
})

app.get('/technology', (Request, Response) => {
    Response.render('technology', {
        title: 'Jagd Technology'
    })
})


app.listen(3000)


let noticias = [
    {
        ultimasNoticias : [
            {
                title: '',
                urlimg: '',
                date: '',
                tag: '',
            },
            {
                title: '',
                urlimg: '',
                date: '',
                tag: '',
            },
            {
                title: '',
                urlimg: '',
                date: '',
                tag: '',
            },
            {
                title: '',
                urlimg: '',
                date: '',
                tag: '',
            }
        ]
    }
]