import React from "react";
import { Link } from "react-router-dom";

const Card = ({ el }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={el?.strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{el?.strMeal}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`/${el?.idMeal}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
