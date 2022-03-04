import React from "react";
import './Navigation.css';
import { NavLink } from "react-router-dom";


const Navigation = () => {

    return (
        <div className="Nav">
            <header>
                <div>
                    <NavLink to ="/"> Home </NavLink>
                    <NavLink to="/frequencies"> Frequencies </NavLink>
                    <NavLink to="/tuners"> Tuners </NavLink>
                    <NavLink to="/recordings"> Recordings </NavLink>
                    <NavLink to="/submit"> Submit </NavLink>
                </div>
            </header>
        </div>
    );
};

export default Navigation;