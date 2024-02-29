// 
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5000;

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: null,
    database: "redbus",
});

let text;

const getData = (result) => {
    let data='';
    result.map(rows => {
        for (row in rows) {
         data = data+rows[row] + "    &nbsp ";
        }
        data += '<br>';
    });
    return data;
};

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

con.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log("Connected to database!");
});

app.get('/', (req, res) => {
    con.query("SELECT * FROM cities", (err, result) => {
        if (err) {
            res.status(500).send("Error retrieving data from the database");
            return;
        }
        text = getData(result);
        res.send(text);
    });
});
