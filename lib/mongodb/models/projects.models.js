const { Schema, models, model } = require("mongoose");
const stringAndReq = { type: String, required: true };
const projectSchema = new Schema({
  status: { ...stringAndReq },
  image: stringAndReq,
  name: stringAndReq,
  description: stringAndReq,
  chrome: stringAndReq,
  tags: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Tags",
        index: 1,
      },
      name: { type: String, required: true },
    },
  ],
  githubUrl: stringAndReq,
});
const Project =
  models.PersonalProject || model("PersonalProject", projectSchema);
export default Project;
