import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import * as React from "react";
import Home from "./components/home/home";


function App() {
  return (
    <>
      <Navbar />
      <Home/>
    </>
  );
}
export default App;