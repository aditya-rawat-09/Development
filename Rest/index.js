const Express = require('express');
const path = require('path');
const app = Express();
const port =3000;
const {v4:uuidv4} = require('uuid');


app.use(Express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(Express.static(path.join(__dirname,'public')));
let posts = [
    {   id:uuidv4(),
        username: 'Aditya',
        comment: 'This is a comment'
    },
    {   id:uuidv4(),
        username: 'John',
        comment: 'This is another comment'
    },
    {   id:uuidv4(),
        username: 'Doe',
        comment: 'This is a third comment'
    }
];

app.get('/posts',(req,res)=>{
    res.render("index.ejs",{posts:posts});
})


app.get('/posts/new',(req,res)=>{
    res.render("new.ejs");
})
app.post('/posts',(req,res)=>{
    let id = uuidv4();
    const {username,comment} = req.body;
    posts.push({id,username,comment});
    res.redirect('/posts');
})

app.get("/posts/:id",(req,res)=>{
    const {id} = req.params;
    const post = posts.find(p => p.id === id);
    res.render("view.ejs",{post:post});
});

app.get('/',(req,res)=>{
    res.send('Welcome to my Rest API');
});

app.get("/posts/:id/edit",(req,res)=>{
    const {id} = req.params;
    const post = posts.find(p => p.id === id);
    res.render("edit.ejs",{post:post});
});

app.post("/posts/:id/edit",(req,res)=>{
    const {id} = req.params;
    const {username,comment} = req.body;
    const post = posts.find(p => p.id === id);
    post.username = username;
    post.comment = comment;
    res.redirect('/posts');
});

app.post("/posts/:id/delete",(req,res)=>{
    const {id} = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
});




app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
})