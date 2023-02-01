import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [type, setType] = useState("Beef");
  const getMeals = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`
    );
    setMeals(data?.meals);
  };

  const getCategories = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    setCategories(data?.meals);
  };

  useEffect(() => {
    getMeals();
    getCategories();
  }, [type]);

  return (
    <div className="container mx-auto">
      {categories?.map((cat) => (
        <button
          onClick={() => setType(cat?.strCategory)}
          className="btn btn-sm btn-secondary m-2"
          key={cat?.strCategory}
        >
          {cat?.strCategory}
        </button>
      ))}
      <div className="flex flex-wrap justify-center items-center my-10 gap-5">
        {meals?.map((el) => (
          <Card key={el?.idMeal} el={el} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
