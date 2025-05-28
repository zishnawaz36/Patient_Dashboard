import express from "express";
import { verifyToken } from "../Middleware/dashboardMiddleware.js";
import { getWeights,getMedication,getShipments } from "../Controller/dashboardController.js";


const dashboardRouter = express.Router();

dashboardRouter.get("/weights", verifyToken, getWeights);
dashboardRouter.get("/medication", verifyToken, getMedication);
dashboardRouter.get("/shipments", verifyToken, getShipments);

export default dashboardRouter;
