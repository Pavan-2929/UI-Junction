import mongoose from "mongoose";

const copySchema = mongoose.Schema(
  {
    count: {
        type: Number,
        default: 0,
    }
  },
  { timestamps: true }
);

const Copy = mongoose.model("Copy", copySchema);

export default Copy;
