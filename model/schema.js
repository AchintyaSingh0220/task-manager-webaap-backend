const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    userId: {type: String},
    taskName: {type: String},
    date: {type: Date},
    priority: {type: Number},
    setReminder: {type: Boolean}
}, {
    collection: "tasks"
});

module.exports = mongoose.model("taskSchema", schema);