const { Pool } = require("pg");
const format = require("pg-format");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "postgres",
    database: "tareas",
    port: 5432,
    allowExitOnIdle: true
})


  
