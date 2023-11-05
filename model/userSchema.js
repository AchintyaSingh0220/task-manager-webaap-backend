const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    userId: {type: String},
    password: {type: String}
}, {
    collection: "users"
});

const users = mongoose.connection.useDb('userdb');

module.exports = users.model("userSchema", schema);