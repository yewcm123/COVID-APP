const mysql = require('mysql');
const octokit = require('octokit');

const dbService = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "covid-app-db"
});

dbService.connect((err)=>{
    if (err) throw err;
    console.log('Connected to database');
})

app.get('/getAll',(req, res )=>{
    dbService.query('SELECT * FROM `cases_malaysia` WHERE 1', (err, result) => {
        if (err) 
    })

})