import  "./thapar.css";
import Card from "../home/Card";
import React, { useState } from "react";
import data from "./data.json";
const Navbarthapar = () => {
    const [members, setMembers] = useState([]);
  
    function displayMembers(e) {
      setMembers(data[e.target.dataset.target]);
      // console.log(members);
    }
    return (
        <>
          <div className="navdes">
            <ul className="navbar">
              <li className="firstcomp">
                <p onClick={displayMembers} data-target="first">
                  First Year
                </p>
              </li>
              <li>
                <p onClick={displayMembers} data-target="second">
                    Second Year
                </p>
              </li>
              <li>
                <p onClick={displayMembers} data-target="third">
                  Third Year
                </p>
              </li>
              <li>
                <p onClick={displayMembers} data-target="fourth">
                  Forth Year
                </p>
              </li>
            </ul>
          </div>
          <div className="members">
            <div className="wrapper">
              {members.map((el) => {
                return <Card img={el.img} title={el.title} />
              })}
            </div>
          </div>
        </>
      );
    };
    
    export default Navbarthapar;