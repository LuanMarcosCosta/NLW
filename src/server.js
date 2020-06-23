const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db") // por causa da linha "exports" lá no db.js eu consigo usar essa linh aqui

//Configurar Pasta única - Pega TODA a pasta "Public" e a deixa "visivel" para todo o sistema de rota.
server.use(express.static("public"))


// Habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }))

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

server.post("/savepoint", (req, res) => {

    //req.body uma forma de pegar os dados do create-point e salvar (tudo que está no body)
    //console.log(req.body)

    //inserir dados no banco de dados  
    const query = `
        INSERT INTO places (
            name,
            image,             
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items

    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err) //caso apresente algum erro no SQL
            return res.send("Erro ao Cdastrar")
        }

        console.log("Cadastrado com Sucesso")
        console.log(this) // Se passar os comando de INSERT, Vai dar essa mensagem

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData)

})


server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == "") {
        // pesquisa vazia
        return res.render("search-results.html", { total: 0 })
    }


    // Pegar os dados do banco de dados 
    //03: Consultar dados da Tabela
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if (err) {
            return console.log(err) //caso apresente algum erro no SQL
        }

        const total = rows.length

        //mostra a pagina HTML com os dados que estão no banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })
})





// Ligar o Servidor - Para iniciar digite "npm start" apenas
// depois abra o Chrome e digite "localhost3000"
server.listen(3000)