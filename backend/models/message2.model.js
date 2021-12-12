const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema2 = new Schema({
    content: {type: String, required: true},
    image: {type: String, required: true},
    from: {type: String, required: true},
    to: {type: String, required: true},
},{
    timestamps: true,
});

const Message2 = mongoose.model('Message', messageSchema2);

module.exports = Message2;