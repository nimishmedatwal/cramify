import React from "react";
import "./home.css";
import Card from "./Card";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
const options = [
"Thapar Institute of Engineering and Technology",
"Punjab Engineering College",
"Indian Institute of Technology, Roorkee",
"Indian Institute of Technology, Bombay",
"Indian Institute of Technology, Delhi",
"Indian Institute of Technology, Kanpur",
"Indian Institute of Technology, Kharagpur"
];
const colleges = {
  "TIET": ["Computer Science and Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Electronics and Communication Engineering",
    "Information Technology",
    "Biotechnology",
    "Chemical Engineering",
    "Civil Engineering",
    "Electronics and Instrumentation Engineering",
    "Metallurgical and Materials Engineering"]
  ,
  "IIT roorkee": ["Computer Science and Engineering",
    "Metallurgical and Materials Engineering"],
  "IIT Bombay": ["Computer Science and Engineering"]
}
const branchoptions = [

];   


export default function Home() {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('')
  const [branchvalue, branchsetValue] = React.useState(options[0]);
  const [branchinputValue, branchsetInputValue] = React.useState('')
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
        <div className="colleges_heading">
          <h1>Select your College </h1>
        </div>
        <div className="collegeselection">
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={Object.keys(colleges)}
            sx={{ width: 300, display: 'inline-block' }}
            renderInput={(params) => <TextField {...params} label="Colleges" />}
           />
           <Autocomplete
            branchvalue={branchvalue}
            onChange={(event, newValue) => {
              branchsetValue(newValue);
            }}
            branchinputValue={branchinputValue}
            onInputChange={(event, newInputValue) => {
              branchsetInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={colleges[value]}
            sx={{ width: 300 , display: 'inline-block' , ml: 5}}
            renderInput={(params) => <TextField {...params} label="Branch" />}
           />
        </div>
        <Link to="/thapar">
        <Card 
        img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1668459022/Colleges/noimage_hnb7yf.jpg"
        title="Thapar University"
        />
        
        </Link>
      </div>
    </>
  );
}
