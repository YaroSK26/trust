import mongoose, { Schema } from "mongoose";

const CommunitySchema = new Schema(
  {
    text: String,
    date: String,
    userId: String,
    profileImg: String,
    name: String,
  },
  {
    timestamps: true,
  }
);

const Community =
  mongoose.models.Community || mongoose.model("Community", CommunitySchema);

export default Community;
