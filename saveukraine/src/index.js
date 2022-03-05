import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import App from "./App";
import Frequencies from "./Frequencies";
import Tuners from "./Tuners";
import Recordings from "./Recordings";
import Submit from "./Submit";

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/frequencies" element={<Frequencies />} />
            <Route path="/tuners" element={<Tuners />} />
            <Route path="/Recordings" element={<Recordings />} />
            <Route path="/submit" element={<Submit />} />
        </Routes>
    </Router>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// A hash table 