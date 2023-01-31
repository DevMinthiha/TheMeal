import React from "react";
import { Link } from "react-router-dom";

const Card = ({ el }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={el?.strMealThumb} />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate">{el?.strMeal}...</h2>
        <div className="card-actions justify-end">
          <p className="tracking-wider leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            beatae ipsa veritatis ?
          </p>
          <Link to={`/${el?.idMeal}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
