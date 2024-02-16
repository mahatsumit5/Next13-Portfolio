const { Schema, models, model } = require("mongoose");

const skillSchema = new Schema({
  status: { type: String, default: "Inactive" },
  image: { type: String, required: true },
  title: { type: String, required: true, unique: true },
});
const Skill = models.Skill || model("Skill", skillSchema);

export default Skill;
