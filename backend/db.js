require("dotenv").config();

const mongoose = require("mongoose");

exports.connectMongoose = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/web3OTT")
    .then(() => {
      console.log(" connection successful");
    })
    .catch((e) => {
      console.log(" no connection");
    });
};

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

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number },
  releaseDate: { type: Date },
  genre: { type: String },
  rating: { type: Number },
  cast: [{ type: String }],
});


exports.User = mongoose.model("User", userSchema);
exports.Video = mongoose.model("Video", videoSchema);
