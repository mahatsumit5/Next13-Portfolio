const { Schema, models, model } = require("mongoose");
const stringAndReq = { type: String, required: true };
const projectSchema = new Schema({
  status: { ...stringAndReq },
  image: stringAndReq,
  name: stringAndReq,
  description: stringAndReq,
  chrome: stringAndReq,

  githubUrl: stringAndReq,
});
const Project = models.Projects || model("Projects", projectSchema);
export default Project;
