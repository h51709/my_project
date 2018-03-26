var mongoose =require("mongoose");
var UserSchema = mongoose.Schema({
	tel : String,
	pwd : String,
	username : String,
})
module.exports = UserSchema;