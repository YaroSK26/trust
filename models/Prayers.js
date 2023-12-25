import mongoose, { Schema } from "mongoose";

const PrayersSchema = new Schema(
  {
    text: String,
    date: String,
    userId: String,
  },
  {
    timestamps: true,
  }
);

const Prayers =
  mongoose.models.Prayers || mongoose.model("Prayers", PrayersSchema);

export default Prayers;
