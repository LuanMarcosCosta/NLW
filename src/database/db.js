// Importar a dependencia do SQlite3
const sqlite3 = require("sqlite3").verbose() //é par ver a informaçã, tipo quanod descompact o bd firebird

//Criar objeto que irá fazer operações np BD
const db = new sqlite3.Database(".src/database/database.db")