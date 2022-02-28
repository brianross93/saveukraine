import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, Grid, useMediaQuery } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";
import Navigation from "./Navigation";
import Tuners from "./Tuners";
import Frequencies from "./Frequencies";
import Recordings from "./Recordings";
import Submit from "./Submit";
import Footer from "./Footer";

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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <header>
                <nav>
                    <Navigation />
                </nav>
            </header>
            <main>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ width: "100%" }}
                >
                    <Grid
                        item
                        sx={{ mt: 10, minWidth: "80%" }}
                    >
                        <Tuners />
                    </Grid>

                    <Grid
                        item
                        sx={{ mt: 10, minWidth: "80%" }}
                    >
                        <Frequencies />
                    </Grid>
                    <Grid
                        item
                        sx={{ mt: 10, minWidth: "80%" }}
                    >
                        <Recordings />
                    </Grid>
                    <Grid
                        item
                        sx={{ mt: 10, minWidth: "80%" }}
                    >
                        <Submit />
                    </Grid>
                </Grid>
            </main>
            <footer>
                <Footer />
            </footer>
        </ThemeProvider>
    );
}

export default App;
