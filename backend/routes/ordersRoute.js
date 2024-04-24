import express from "express";
import controller from "../controllers/ordersController.js";
import trimRequest from "trim-request";

const router = express.Router();

router.route("/").post(trimRequest.all, controller.postOrdersData);
router.route("/myOrders").post(trimRequest.all, controller.getMyOrdersData);

export default router;
