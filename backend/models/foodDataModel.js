import mongoose from "mongoose";

const Schema = mongoose.Schema;

const foodItemSchema = new Schema(
  {},
  { collection: "food_items", strict: false }
);
const foodDataModel = mongoose.model("food_item", foodItemSchema);

const foodCategorySchema = new Schema(
  {},
  { collection: "food_category", strict: false }
);
const foodCategoryModel = mongoose.model("food_category", foodCategorySchema);

export default { foodDataModel, foodCategoryModel };
