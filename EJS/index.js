const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.render("home.ejs");
});

app.get('/rolldice', (req, res) => {
   let diceVal = Math.floor(Math.random() * 6) + 1;
   res.render("rolldice.ejs", { diceVal });
});

app.get('/form', (req, res) => {
   res.render("form.ejs");
});

app.post('/form', (req, res) => {
   let {name, password} = req.body;
   res.send(`Welcome ${name}. Your password is ${password}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 
