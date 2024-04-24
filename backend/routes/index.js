import express from "express";
import userRoute from "./userRoute.js";
import foodDataRoute from "./foodDataRoute.js";
import ordersRoute from "./ordersRoute.js";
const router = express.Router();

router.use("/", userRoute);
router.use("/foodData", foodDataRoute);
router.use("/orders", ordersRoute);

export default router;
