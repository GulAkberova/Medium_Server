const { default: mongoose } = require("mongoose");

const { Schema } = mongoose

const UserSchema = new Schema({
    name: String,
    email:String,
    provider: String,
    provider_id: String,
    token:String,
    provider_pic:String,
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }

    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    isDeleted: {
        type: Boolean,
        default: false
    },
    addDate: {
        type: Date,
        default: Date.now()
    }
})

UserSchema.method.follow=function(user_id){
    if(this.following.indexOf(user_id) === -1){
        this.following.push(user_id)
    }
    return this.save()
}
UserSchema.method.addFollower=function(fs){
    this.followers.push(fs)
}

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}