var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: Date,
    updated_at: Date
});

userSchema.methods.summary = function() {
    var summary = "\nName: " + this.name + "\nEmail: " + this.email + "\nUsername: " + this.userName + "\n";
    console.log("Summary: \n" + summary);
    return summary;
};

var User = mongoose.model('userSchema', userSchema);

module.exports = User;
