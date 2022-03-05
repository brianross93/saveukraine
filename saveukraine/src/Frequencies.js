import React, {useState} from "react";
import {ListItem, ListItemText, Paper, Typography } from "@mui/material";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./Frequencies.css";
import Container from "@material-ui/core/Container";

import { List } from "@mui/material";




//The npm install command for Container, List, ListItem, ListItemText
//npm install @material-ui/core


// 

// Create a frequencies component that renders a list of frequencies.
// Put the Navigation Bar at the top, and the Footer on the bottom.
// Code:
//



const Frequencies = () => {
    const [frequencies, setFrequencies] = useState([
        { freq: "8791 KHZ", active: true },
        { freq: "3809 KHZ", active: false },
        { freq: "5640 KHZ", active: false },
        { freq: "7933 KHZ", active: true },
        { freq: "8939 KHZ", active: false },
        { freq: "8090 KHZ", active: false },
        { freq: "4034 KHZ", active: false },
        { freq: "3305 KHZ", active: false },
        { freq: "3310 KHZ", active: false},
        { freq: "3891-5 KHZ", active: true },
        { freq: "2737 KHZ", active: false },
        { freq: "3218.5 KHZ Katok-65", active: false },
        { freq: "3828 KHZ", active: false },
        { freq: "3850.00 KHZ", active: false },
        { freq: "4179 KHZ", active: false },
        { freq: "4600 KHZ POT RUS", active: false },
        { freq: "4625 KHZ BUZZER", active: false },
        { freq: "5125 KHZ", active: true },
        { freq: "8131 KHZ LRA", active: false },
        { freq: "6822 KHZ", active: false },
        { freq: "7816.00 KHZ", active: true },
        { freq: "7835.00 KHZ", active: false },
        { freq: "7933 KHZ", active: false },
        { freq: "9741 KHZ", active: false },

    ]);
    // Use the below code as reference for displaying the frequencies.
    // Do not display the text as a button. Do not make it clickable. 
    // Do not use Paper or Grid components.
    // Dont use List or ListItem components.
    // Do not use Typography components.
    // The user should be able to copy and paste the frequencies into their own spreadsheet.
    // Display active frequencies in green, inactive frequencies in red.
    // The frequencies should be displayed in the order they are in the array.

    // Code:

    return (
        <div>
            <Navigation />
            <Container maxWidth="sm">
                <Paper className="paper">
                    <Typography variant="h5">
                        Frequencies
                    </Typography>
                    <List>
                        {frequencies.map((e, i) => {
                            return (
                                <ListItem
                                    key={`frequencies-${i}`}
                                    className={e.active ? "active" : "inactive"}
                                >
                                    <ListItemText
                                        primary={e.freq}
                                        secondary={e.active ? "Active" : "Inactive"}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Paper>
            </Container>
            <Footer />
        </div>
    );
};



    // Iterate over the frequencies array and display each frequency as a list item.
    // Code:


    // Create a function that will toggle the active state of the frequency.
    // Code:





           



export default Frequencies;
