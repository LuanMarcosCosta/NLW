const express = require("express")
const server = express()


//Configurar Pasta única - Pega TODA a pasta "Public" e a deixa "visivel" para todo o sistema de rota.
server.use(express.static("public"))


// Utilizando Templates engine, assim chamamos "pedimos" ela
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar Caminhos para a minha aplicação
//Página inicial 
//req: Requisição
//res: Respost
server.get("/", (req, res) => {
    return res.render("index.html", { title: "um titulo" }) // O próprio nunjucks vai encontrar os arquivos HTML
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})





// Ligar o Servidor - Para iniciar digite "npm start" apenas
// depois abra o Chrome e digite "localhost3000"
server.listen(3000)