import mongoose, { Schema } from "mongoose";

const SavedSchema = new Schema(
  {
    text: String,
    author: String,
    date: String,
    userId: String,
  },
  {
    timestamps: true,
  }
);

const Saved =
  mongoose.models.Saved || mongoose.model("Saved", SavedSchema);

export default Saved;
