// Importar a dependencia do SQlite3
const sqlite3 = require("sqlite3").verbose() //é par ver a informaçã, tipo quanod descompact o bd firebird

//Criar objeto que irá fazer operações np BD
const db = new sqlite3.Database("./src/database/database.db")

// Utilizar o objeto de banco de dados, para nossas operações 
db.serialize(() => {

    // Com comandos SQL:

    // 01: Crir uma Tabela 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            addres2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    // 02: Inserir dados na Tabela
    const query = `
        INSERT INTO places (
            image, 
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colectoria",
        "Guilherme Gemballam Jardim América",
        "Número 360",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"

    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com Sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    // 03: Consultar dados da Tabela


    // 04: Deletar Dados na Tabela
})