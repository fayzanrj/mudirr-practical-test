import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  id: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  nextMileStoneDate: {
    month: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  latestCompletedStep: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Ongoing", "Completed", "Draft", "Cancelled"],
    required: true,
  },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
