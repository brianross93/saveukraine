import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme, useMediaQuery } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { blue, yellow } from "@mui/material/colors";
import Home from "./Home";

const App = () => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(
        () => createTheme({
            palette: {
                mode: prefersDarkMode ? "dark" : "light",
                primary: blue,
                secondary: yellow,
                background: {
                    default: prefersDarkMode ? "#121212" : "#f3f3f3" 
                }
            },
        }),
        [prefersDarkMode],
    );

    return (
        <div>
            <Home/>
            <Outlet />
        </div>
    );
}

export default App;
