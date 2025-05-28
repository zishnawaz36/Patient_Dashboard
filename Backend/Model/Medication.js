import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  type: String,
  dosage: String
});

const Medication = mongoose.model("Medication", medicationSchema);
export default Medication;
