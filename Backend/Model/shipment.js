import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  trackingNumber: String,
  expectedDate: Date,
  status: {
    type: String,
    enum: ["Delivered", "Upcoming"],
    default: "Upcoming"
  }
});

const Shipment = mongoose.model("Shipment", shipmentSchema);
export default Shipment;
