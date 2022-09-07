const mysql = require('mysql');
const octokit = require('octokit');
let dbServiceInstance = null;

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "covid_data",
    port:'3306'
});

connection.connect((err)=>{
    if (err) throw err;
    console.log('Connected to database');
})

class dbService{
    static getDbServiceInstance(){
        return dbServiceInstance ? dbServiceInstance : new dbService();
    }

    async getAllData() {
        try{
            const respond = await new Promise((resolve,reject) => {
                const query = 'SELECT `num`,`date`,`cases_new` FROM `cases_malaysia` WHERE 1';

                connection.query(query,(err,results)=> {
                    if(err) reject (new Error(err.message));
                    resolve(results);
                })            
            });

            return respond;
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = dbService;