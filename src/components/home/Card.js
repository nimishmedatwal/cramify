import React from "react";
import "./home.css";

const Card = (props) => {
  return (
    <>
    <div className="card">
      <div className="card_body">
        <img src={props.img} className="card_image" />
      </div>
      <center>
        <h2 className="card_title">{props.title}</h2>
      </center>
      <button className="card_btn">Learn More</button>
    </div>
    </>
  );
};

export default Card;