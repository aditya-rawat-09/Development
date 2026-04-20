const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const Chat = require('./models/chat.js');
const expressError=require('./expresserror.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
    console.log('connected to mongodb');
    const count = await Chat.countDocuments();
    if (count === 0) {
        await Chat.insertMany([
            { from: 'ram', to: 'raj', message: 'Hello, raj!' },
            { from: 'krish', to: 'Bob', message: 'Hello, Bob!' },
            { from: 'jai', to: 'karan', message: 'Hello, karan!' },
            { from: 'Adi', to: 'Bot', message: 'Hello, Bot!' }
        ]);
        console.log('Sample chats inserted');
    }
}

main().catch(console.log);

app.get('/new', (req, res) => {
    res.render('new');
});

app.post('/chats', async (req, res) => {
    const { from, to, message } = req.body;
    let newchat= new Chat({
        from : from,
        to : to,
        message : message,
        created_at : new Date()

    });
    newchat.save().then(() => {
        console.log('Chat saved successfully');
    }).catch((err) => {
        console.log('Error saving chat:', err);
    });
    res.redirect('/chats');

});

app.get('/chats/:id/edit', async (req, res) => {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    if (!chat) {
        // Handle case where chat is not found
        next( new expressError(404,"Chat not found"));
    }
    res.render('edit', { chat });
});


//  async error handling middleware
app.use((err,req,res,next)=>{
    let {status=500,message="something went wrong"}=err;
    res.status(status).send(message);
});

app.post('/chats/:id/edit', async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;
    await Chat.findByIdAndUpdate(id, { message });
    res.redirect('/chats');
});

app.delete('/chats/:id', async (req, res) => {
    const { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect('/chats');
});

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/chats', async (req, res) => {
    const chats = await Chat.find({});
    res.render('chats', { chats });
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
