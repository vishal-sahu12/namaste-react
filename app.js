import { title } from "process";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Lecture1/src/Components/Header"
import Body from "./Lecture1/src/Components/Body";

/*
Header
Nav-items
Image about sectoion

*/










const Applayout = () =>{


    return(
        <div className="app">
           <Header></Header> 
           <Body/>
        </div>
    );
};







const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);