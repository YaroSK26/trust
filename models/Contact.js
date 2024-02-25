import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    userId: String,
  },
  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;
