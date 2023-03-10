const mongoose = require("mongoose");
require('mongoose-type-email');
mongoose.SchemaTypes.Email.defaults.message = 'Email address is invalid';

const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type:mongoose.SchemaTypes.Email, unique: true, required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
     
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestaps: true }
);


userSchema.methods.matchPassword  = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
}

//code that encrypts the password and then store it to database
userSchema.pre("save", async function (next){
  if(!this.isModified){
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); 
});
//END code that encrypts the password and then store it to database





const User = mongoose.model("User", userSchema);

module.exports = User;
