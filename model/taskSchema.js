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

const tasks = mongoose.connection.useDb('taskdb');

module.exports = tasks.model("taskSchema", schema);