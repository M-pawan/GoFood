import express from "express";
import controller from "../controllers/foodDataController.js";
import trimRequest from "trim-request";

const router = express.Router();

router.route("/").get(trimRequest.all, controller.getFoodData);

export default router;
