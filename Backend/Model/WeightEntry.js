import mongoose from "mongoose";

const weightSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  weight: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

const WeightEntry = mongoose.model("WeightEntry", weightSchema);
export default WeightEntry;
