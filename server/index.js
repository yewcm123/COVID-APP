const express = require('express');
app = express();
const cors = require('cors');
const mysql = require('mysql');
const octokit = require('octokit');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const PORT = 5000;

app.listen(PORT,(err)=> {
    if (err) throw err;
    console.log(`Listening at port ${PORT}`);
})

