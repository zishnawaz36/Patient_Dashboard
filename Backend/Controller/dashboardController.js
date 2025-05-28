import WeightEntry from "../Model/WeightEntry.js";
import Medication from "../Model/Medication.js";
import Shipment from "../Model/shipment.js";

// GET weights
export const getWeights = async (req, res) => {
  const weights = await WeightEntry.find({ userId: req.userId }).sort({ date: 1 });
  res.json(weights);
};

// GET medication
export const getMedication = async (req, res) => {
  const medication = await Medication.findOne({ userId: req.userId });
  res.json(medication);
};

// GET shipments
export const getShipments = async (req, res) => {
  const shipments = await Shipment.find({ userId: req.userId }).sort({ expectedDate: 1 });
  res.json(shipments);
};
