import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  console.log(meals);

  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    // console.log(data?.meals);
    setMeals(data?.meals);
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center items-center my-10 gap-5">
        {meals?.map((el) => (
          <Card key={el?.idMeal} el={el} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
