import React from "react";
import { Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const Frequencies = () => {
    const frequencies = [
        { freq: "2737 KHZ", active: false },
        { freq: "3218.5 KHZ Katok-65", active: false },
        { freq: "3828 KHZ", active: false },
        { freq: "3850.00 KHZ", active: false },
        { freq: "4179 KHZ", active: false },
        { freq: "4600 KHZ POT RUS", active: false },
        { freq: "4625 KHZ BUZZER", active: false },
        { freq: "5125 KHZ", active: false },
        { freq: "5827 KHZ 8131 KHZ LRA", active: false },
        { freq: "6822 KHZ", active: false },
        { freq: "7816.00 KHZ", active: false },
        { freq: "7835.00 KHZ", active: false },
        { freq: "7933 KHZ", active: true },
        { freq: "11318 KHZ LRA TU-95 STAT", active: false },
    ];

    return (
        <section id="frequencies">
            <Paper sx={{ p: 5 }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item>
                        <Typography variant="h4">
                            Frequencies
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">
                            Known Russian Military Frequencies
                        </Typography>
                        <List>
                            {frequencies.map((e, i) => {
                                return (
                                    <ListItem key={`frequency-${i}`}>
                                        <ListItemText
                                            primary={e.freq}
                                            secondary={e.active ? "Active" : null}
                                        />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        </section>
    );
};

export default Frequencies;