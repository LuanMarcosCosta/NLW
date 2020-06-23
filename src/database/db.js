// Importar a dependencia do SQlite3
const sqlite3 = require("sqlite3").verbose() //é par ver a informaçã, tipo quanod descompact o bd firebird

//Criar objeto que irá fazer operações np BD
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
    // Utilizar o objeto de banco de dados, para nossas operações 
    /*db.serialize(() => {

        // Com comandos SQL:

        // 01: Crir uma Tabela 
        db.run(`
                CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    image TEXT,
                    address TEXT,
                    address2 TEXT,
                    state TEXT,
                    city TEXT,
                    items TEXT
                );
            `)

        // 02: Inserir dados na Tabela
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
            "Colectoria",
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "CCasa das Artes",
            "Número 500",
            "Espírito Santo",
            "Vitória",
            "Pilhas"

        ]

        function afterInsertData(err) {
            if (err) {
                return console.log(err) //caso apresente algum erro no SQL
            }

            console.log("Cadastrado com Sucesso")
            console.log(this) // Se passar os comando de INSERT, Vai dar essa mensagem
        }

        db.run(query, values, afterInsertData)

        //03: Consultar dados da Tabela
        db.all(`SELECT * FROM places`, function(err, rows) {
            if (err) {
                return console.log(err) //caso apresente algum erro no SQL
            }

            console.log("Aqui estão os seus registros:")
            console.log(rows) // Senão apresentar, vai retornar os dados
        })

        // 04: Deletar Dados na Tabela
        db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
            if (err) {
                return console.log(err) //caso apresente algum erro no SQL
            }

            console.log("Registro Deletado com sucesso")
        })




    })
    */