import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatchCart, useStateCart } from "./ContextReducer";

export default function Card(props) {
  console.log(props);
  let dispatch = useDispatchCart();
  let data = useStateCart();

  const priceRef = useRef();

  const options = props.options;
  const priceOptions = Object.keys(options);
  // console.log(priceOptions);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    console.log(food);
    // console.log(new Date())
    if (food != []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
          img: props.foodItem.img,
        });
        console.log("Size different so simply ADD one more to the list");
        return;
      }
      return;
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });

    // setBtnEnable(true)

    console.log(data); //Basically ye data hai jo hum pass karenge contextAPI ke through
  };
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div
        className="card mt-3 mb-3"
        style={{ width: "16rem", maxHeight: "360px" }}
      >
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt="..."
          style={{ height: "120px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          <div className="container w-100">
            <select
              className="h-100 bg-success"
              onChange={(e) => setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions &&
                priceOptions.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
            </select>
            <div className="d-inline h-100 fs-5">₹ {finalPrice} /-</div>
          </div>
          <hr />
          <button
            className="btn btn-success justify-center ms-2"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
