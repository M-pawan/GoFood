import React, { useState, useEffect, useReducer } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import { GET_FOOD_DATA } from "../apiRoutes";

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodData, setFoodData] = useState([]);

  const loadData = async () => {
    let data;
    const response = await fetch(GET_FOOD_DATA, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    const result = await response.json();
    console.log(result);
    setFoodCat(result.foodCategoryData);
    setFoodData(result.foodData);
  };

  useEffect(() => {
    loadData();
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel search={search} setSearch={setSearch} />
      </div>
      <div className="container">
        {foodCat &&
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodData &&
                  foodData
                    ?.filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                          />
                        </div>
                      );
                    })}
              </div>
            );
          })}
        {/* <Card /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
