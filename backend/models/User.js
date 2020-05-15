const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  inventory: {
    type: Array,
    required: false,
  },
});

const User = mongoose.model("rn-user", UserSchema);

module.exports = User;
