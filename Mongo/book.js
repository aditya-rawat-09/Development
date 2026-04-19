const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    price: {
        type: Number
    }
});

const Book = mongoose.model('Book', BookSchema);

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Connected to MongoDB');
        
        const book1 = new Book({
            title: "Harry Potter",
            author: "J.K. Rowling",
            price: 500
        });
        
        const result = await book1.save();
        console.log('Book saved:', result);
    } catch (err) {
        console.log('Error:', err);
    }
}

main();
