require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("Successful connection"))
  .catch((err) => console.log(`Error: ${err}`));

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 30,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscriptionStatus: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  plan: {
    type: String,
    enum: ["day", "month", "yearly"],
  },
});
const User = mongoose.model("User", userSchema);

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number },
  releaseDate: { type: Date },
  genre: { type: String },
  rating: { type: Number },
  cast: [{ type: String }],
});
const Video = mongoose.model("Video", videoSchema);

module.exports = {
  User,
  Video,
};
