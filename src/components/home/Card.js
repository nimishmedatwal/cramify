import React from "react";
import "./home.css";

const Card = (props) => {
  return (
    <>
      <div class="img-card iCard-style1">
        <div class="card-content">
          <div class="card-image">
            <span class="card-title"></span>
            <img src={props.img} />
          </div>
          <div class="card-text">
            {props.title}
          </div>
        </div>
        <div class="card-link">
          <a href="./thapar" title="Read Full">
            <span>Explore</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
