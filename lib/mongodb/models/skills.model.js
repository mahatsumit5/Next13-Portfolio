const { Schema, models, model } = require("mongoose");

const skillSchema = new Schema({
  color: { type: String, required: true, unique: true },
  icon: { type: String, required: true },
  title: { type: String, required: true },
});
const Skill = models.Skill || model("Skill", skillSchema);

export default Skill;
