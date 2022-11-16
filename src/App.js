import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import * as React from "react";
import Home from "./components/home/home";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Thapar from "./components/thapar/thapar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/thapar' element={<Thapar/>} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    
  );
}
export default App;