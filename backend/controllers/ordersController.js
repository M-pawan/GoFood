import mongoose from "mongoose";
import Model from "../models/OrdersModel.js";

const getMyOrdersData = async (req, res) => {
  try {
    let ordersData = await Model.OrdersModel.findOne({ email: req.body.email });
    res.json({
      success: true,
      ordersData: ordersData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
const postOrdersData = async (req, res) => {
  const data = req.body.ordersData;
  console.log(data);
  await data.splice(0, 0, { OrderDate: req.body.orderDate });

  // if emial not existing in the DB then create else insert many
  let emailId = await Model.OrdersModel.findOne({ email: req.body.email });
  console.log(emailId);

  if (emailId == null) {
    try {
      await Model.OrdersModel.create({
        email: req.body.email,
        ordersData: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error);
      res.send("Server Error", error.message);
    }
  } else {
    try {
      await Model.OrdersModel.findOneAndUpdate(
        { email: req.body.email },
        { $push: { ordersData: data } }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error);
      res.send("Server Error", error.message);
    }
  }
};
export default { getMyOrdersData, postOrdersData };
