import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import components
import AddPage from "./Components/AddPage";
import ViewData from "./Components/ViewData";
import Nav from "./Components/Nav";
import UpdatePage from "./Components/UpdatePage";

//react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Directory</h1>
        <Nav />
        <Switch>
        <Route path="/view" component={ViewData} />
        <Route path="/add" component={AddPage} />
        <Route path="/update/:id" component={UpdatePage} />
        </Switch>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
