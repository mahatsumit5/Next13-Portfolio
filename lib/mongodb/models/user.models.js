const { Schema, models, model } = require("mongoose");

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = models.User || model("User", userSchema);

export default User;
