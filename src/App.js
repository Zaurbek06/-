import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    
    <div className="app-wraper">
      <Header />
      <Navbar />
      <div className="app-wraper-content">
        <Routes>
        <Route path="/dialogs/*" Component={Dialogs}></Route>
        <Route path="/profile" Component={Profile}></Route>
        </Routes>
        
      </div>
      
    </div>
    
    </BrowserRouter>
  );
}

export default App;
