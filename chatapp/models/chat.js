const monsoose = require('mongoose');

const chatSchema = new monsoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Chat = monsoose.model('Chat', chatSchema);

module.exports = Chat;
