const express = require('express');
app = express();
const cors = require('cors');
const mysql = require('mysql');
const octokit = require('octokit');

const dbService = require ('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const PORT = 5000;

app.listen(PORT,(err)=> {
    if (err) throw err;
    console.log(`Listening at port ${PORT}`);
});

app.get('/getAllData',( request , respond )=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData();
    result
    .then(data=>{
        
        respond.json({data:data})
    })
    .catch(err=>console.log(err));
    
});


