const express = require('express');
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.static("."))

// so that data from this API won't be rejected!
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next() // important
});

// Setup mysql and connect
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'enquiry'
});

conn.connect(err => {
    if (err) {
        console.log("Error: " + err);
    }
    else{
            console.log("Connected!");
        }
});

// Route for login
app.post('/login', (req, res) => {
    let data = req.body;
    let username = data?.username;
    let password = data?.password;

    if (!username || !password){
        res.send("<h1 style='color: red;'>Invalid Details</h1>");
    }else{
        let sql = "SELECT username FROM login WHERE username=? AND password=?";
        conn.query(sql, [username, password], (err, result) => {
            if (err){
                console.log(err);
                res.send(500, {error: err});
            }else{
                if(result.length == 1){
                    res.json( {msg: "Login Successful"} );
                }else{
                    res.json( {msg: "Login Failed"} );
                }
            }
        });
    }
});

// Route for saving enquiries
app.post("/save", (req, res) => {
    let data = req.body;
    let name = data?.name;
    let number = data?.number;
    let email = data?.email;
    let enquiry = data?.enquiry;
    if(!name || !number || !email || !enquiry){
        res.send("<h1 style='color: red'>Something went wrong with your data.</h1>");
    }else{
        let sql = "SELECT name FROM enquiries WHERE email=? AND enquiry=?";
        conn.query(sql, [email, enquiry], (err, result) => {
            if(err){
                console.log(err);
                res.json( { msg: "Error occured while inserting" } );
            }else{
                if(result.length >= 1){
                    res.json( {msg: "Enquiry already made"} );
                }else{
                    console.log("now inserting");
                    let sql2 = "INSERT INTO enquiries(name, number, email, enquiry) VALUE(?, ?, ?, ?)";
                    conn.query(sql2, [name, number, email, enquiry], (err, result) => {
                        if(err){
                            console.log(err);
                            res.json( { msg: "Error occured while inserting" } );
                        }else{
                            console.log(result);
                            res.json( { msg: "Enquiry Sent" } );
                        }
                    });
                }

            }
        });
    }
});

app.get("/enquiries", (req, res) => {
    let sql = "SELECT name, number, email, enquiry, response FROM enquiries";
    conn.query(sql, (err, result) => {
        let data = result;
        console.log(data);
        res.json( {data: data} );
    })
});

app.post("/respond", (req, res) => {
    console.log("Request receieved");
    let response = req.body?.response;
    let name = req.body?.name;
    if(!response || !name){
        res.send("<h1 style='color: red'>Something wrong with your data!</h1>");
    }else{
        let sql = "UPDATE enquiries SET response=? WHERE name=?";
        conn.query(sql, [response, name], (err, result) => {
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
        })
    }
    res.end();
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
