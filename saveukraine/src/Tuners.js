import React from "react";
import { Grid, Link, Paper, Typography } from "@mui/material";
import Navigation from "./Navigation";
import './Tuners.css';

const Tuners = () => {
    const tuners = [
        { link: "http://websdr.ewi.utwente.nl:8901", name: "University of Twente Radio Listener" },
        { link: "http://84.201.157.25:26057", name: "Alternate Radio Listener (UKR)" },
    ];

    return (
        <>
        <Navigation />
        <section id="tuners">
            <Paper sx={{ p: 5 }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid
                        item
                        sx={{ mb: 2 }}
                    >
                        <Typography variant="h4" textAlign="center">
                            Radio Frequency Tuners
                        </Typography>
                    </Grid>
                    {tuners.map((e, i) => {
                        return (
                            <Grid
                                key={`tuner-${i}`}
                                item
                            >
                                <Link
                                    href={e.link}
                                    target="_blank"
                                    color="primary"
                                    variant="h5"
                                    align="center"
                                >
                                    {e.name}
                                </Link>
                            </Grid>
                        );
                    })}
                </Grid>
            </Paper>
        </section>
        </>
    );
};

export default Tuners;