const mongoose = require('mongoose')


var registerrecord= mongoose.model("registerstudents", new mongoose.Schema({
    "studentname":String,
    "fathername":String,
    "stdcnic":String,
    "phone":Number,
    "city":String,
}))


module.exports = registerrecord