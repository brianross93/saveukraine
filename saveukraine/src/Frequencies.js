import React, {useState} from "react";
import {ListItem, ListItemText, Paper, Typography } from "@mui/material";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./Frequencies.css";


const Frequencies = () => {
    const frequencies = [
        { freq: "3809 KHZ", active: false },
        { freq: "5640 KHZ", active: false },
        { freq: "7933 KHZ", active: true },
        { freq: "8939 KHZ", active: false },
        { freq: "8090 KHZ", active: false },
        { freq: "4034 KHZ", active: true },
        { freq: "3305 KHZ", active: true },
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
    ];

    const [active, setActive] = useState(frequencies[0].active);
    // set active state
    const handleClick = (index) => {
        setActive(frequencies[index].active);
    };
    return (
        <>
        <Navigation />
        <div className="header-text">
                <h1>Frequencies</h1>
        </div>
        <div className="frequencies">
            {frequencies.map((freq, index) => (
                <ListItem key={index} button onClick={() => handleClick(index)}>
                    <ListItemText primary={freq.active ? <Typography variant="h6" color="primary">{freq.freq}</Typography> : <Typography variant="h6">{freq.freq}</Typography>} />
                </ListItem>
            ))}
        </div>
        <Footer />
        </>
    );
};

export default Frequencies;