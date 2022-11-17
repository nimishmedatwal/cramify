import  "./thapar.css";
import React, { useState } from "react"; 
import data from "./data.json";
import Cardbranch from "./cardbranch";
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
                  Fourth Year
                </p>
              </li>
            </ul>
          </div>
          <div className="members">
            <div className="cardwrap">
              {members.map((el) => {
                return <Cardbranch branches={el.branch} link={el.link} />
              })}
            </div>
          </div>
        </>
      );
    };
    
    export default Navbarthapar;