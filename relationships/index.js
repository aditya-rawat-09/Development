const mongoose = require('mongoose');

// --- Schemas ---


const userSchema = new mongoose.Schema({
    username: String,
    Addresses:[
    {
        location:String,
        city :String, 
    }
   ]
});

async function main() {
    // connects to 'relationdemo' database in MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
    console.log('Connected to  DB');

}

const User = mongoose.model('User', userSchema);

const addUsers = async () => {
    let user1 = new User({
        username: "abc",
        Addresses:[{
            _id :false,
            location:"123 street",
            city:"delhi"
        }]
    });
    user1.Addresses.push({location:"456 road",city:"mumbai"});


    let ans =await user1.save();
    console.log(ans);

}

addUsers();

main().catch(err => console.error(err));
