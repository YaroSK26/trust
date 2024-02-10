import mongoose, { Schema } from "mongoose";

const PlanSchema = new Schema(
  {
    planName: String,
    planDay: String,
    thoughtOrVerse: String,
    userId: String,
    
  },
  {
    timestamps: true,
  }
);

const Plan =
  mongoose.models.Plan || mongoose.model("Plan", PlanSchema);

export default Plan;

