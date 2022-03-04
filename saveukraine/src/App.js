import React from "react";
import { Outlet } from 'react-router-dom';
import Home from "./Home";

const App = () => {

    return (
        <div>
            <Home/>
            <Outlet />
        </div>
    );
}

export default App;