import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  ordersData: {
    type: Array,
    required: true,
  },
});
const OrdersModel = mongoose.model("orders", ordersSchema);

export default { OrdersModel };
