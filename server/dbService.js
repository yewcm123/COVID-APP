const mysql = require('mysql');
const octokit = require('octokit');
const moment = require('moment');
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

                connection.query(query,(err,rows)=> {
                    if (err) reject (new Error(err.message));
                    let data = JSON.parse(JSON.stringify(rows))
                    
                    let dateArray = []
                    let casesNewArray = []
                    
                    data.forEach( (data) => {
                        let modDate = data.date
                        modDate=moment(modDate).format('YYYY-MM-DD')
                        dateArray.push(modDate);
                        casesNewArray.push(data.cases_new);
                    })

                    resolve({dateArray,casesNewArray});
                });
                    
            });

            return respond;
            
        } catch(err) {
            
            console.log(err);
        }
    }
}

module.exports = dbService;