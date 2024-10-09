import mongoose, { mongo } from "mongoose";

const FeedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Must provide content title"],
  },
  description: {
    type: String,
  },
  author: {
    type: Array,
    required: [true, "Must provided source author"],
  },
  content_text: {
    type: String,
    required: [true, "Must provide the content text"],
  },
  content_type: {
    type: String,
    required: [true, "Must provide the content type"],
  },
  // thumbnail: {
  //   type: String,
  //   required: [true,"Must provide the content thumbnail"],
  //   },

  //   data: {
  //     type: String,
  //   },
  // },
  // images: {
  //   type: Array,
  // },
  date: {
    type: Date,
    required: [true, "Must provided date"],
  },
});

export default mongoose.model("Article", FeedSchema);
