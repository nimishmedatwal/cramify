import React from "react";
import "./home.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "./Card"

export default function Home() {
  return (
    <>
      <div className="homepage">
        <div className="heading">
          <h1>Cramify</h1>
        </div>
        <div className="arrow">
          <KeyboardArrowDownIcon sx={{ fontSize: 50, color: "white" }} />
        </div>
        <div className="subheading">Scroll Down</div>
      </div>
      <div className="colleges">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div>
            <Card 
            img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1668459022/Colleges/noimage_hnb7yf.jpg" 
            title="Thapar University"
            >

            </Card>
        </div>
      </div>
    </>
  );
}
