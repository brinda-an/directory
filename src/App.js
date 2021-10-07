import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Nav from "./Components/Nav";

//react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutePage from "./routes/RoutePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Directory</h1>
        <Nav />
        <RoutePage />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
