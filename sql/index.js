const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const Path = require('path');

app.set('view engine', 'ejs');
app.set('views',Path.join(__dirname,'/views'));
app.use(express.urlencoded({extended: true}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2022',
    database: 'test'
});
let createRandomUser = () => {
    return [
        faker.number.int({ min: 1, max: 99999 }),
        faker.internet.username(),
        faker.internet.email()

    ];
};

// let q = 'INSERT INTO users (id,username, email) VALUES ?';
// let user=[];
// for (let i = 0; i < 500; i++) {
//     user.push(createRandomUser());
// }

app.get('/', (req, res) => {
    let q = 'select count(*) from users';
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("home.ejs",{X:result[0]['count(*)']});
        });
    } catch (error) {
        console.error(error);
    }
});

app.get('/users', (req, res) => {
    let q = 'select * from users';
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("users.ejs", {users:result});
        });
    } catch (error) {
      res.send("Error fetching users");
    }
});

//edit user
app.get('/users/:id/edit', (req, res) => {
    let {id} = req.params;
    let q = `select * from users where id ='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.render("edit.ejs",{user: result[0]});
        });
    } catch (error) {
      res.send("Error fetching user for edit");
    }
});

//update user
app.post('/users/:id/edit', (req, res) => {
    let {id} = req.params;
    let {username, email} = req.body;
    let q = `UPDATE users SET username='${username}', email='${email}' WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            res.redirect('/users');
        });
    } catch (error) {
      res.send("Error updating user");
    }
});

app.listen(3000, () => {
    console.log("server is running on port http://localhost:3000");
});
