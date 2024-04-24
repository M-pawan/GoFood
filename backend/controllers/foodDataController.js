import mongoose from "mongoose";
import Model from "../models/foodDataModel.js";

const getFoodData = async (req, res) => {
  try {
    let foodData = await Model.foodDataModel.find();
    let foodCategoryData = await Model.foodCategoryModel.find();
    console.log(foodData);

    res.json({
      success: true,
      foodData: foodData,
      foodCategoryData: foodCategoryData,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
export default { getFoodData };
