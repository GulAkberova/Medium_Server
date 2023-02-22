const { default: mongoose } = require("mongoose");

const { Schema } = mongoose

const UserSchema = new Schema({
    name: String,
    email:String,
    password: String,
    confirmCode: String,
    dateOfBirth:Date,
    isDeleted: {
        type: Boolean,
        default: false
    },
    addDate: {
        type: Date,
        default: Date.now()
    }
})


const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}