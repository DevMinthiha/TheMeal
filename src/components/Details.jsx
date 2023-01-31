import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {BsYoutube} from "react-icons/bs"

const Details = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});

  const getSingleMeal = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(data?.meals[0]);
    setMeal(data?.meals[0]);
  };

  useEffect(() => {
    getSingleMeal();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={meal?.strMealThumb} className="w-1/3 rounded" />
        <div>
          <h1 className="text-5xl font-bold">{meal?.strMeal}</h1>
          <p className="py-6">{meal?.strInstructions}</p>
          <a href={meal?.strYoutube} target={"_blank"} className="btn bg-red-600">
            <BsYoutube className="" />
          </a>
          <Link to="/"><button className="btn btn-primary ml-2">Back</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
