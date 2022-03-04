import React from "react";
import { Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import recordings from "./recordings.json";
import moment from "moment";
import { OpenInNew } from "@mui/icons-material";
import Navigation from "./Navigation";
import Footer from "./Footer";


const Recordings = () => {
    const getRecordingDate = (unix) => {
        return moment.unix(unix).utcOffset(2).format("MMM Do, YYYY, HH:mm A");
    };

    return (
        <>
        <Navigation />
        <section id="recordings">
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
                        <Typography variant="h4">
                            Recordings
                        </Typography>
                    </Grid>
                    {Object.keys(recordings).map((k, i) => {
                        return (
                            <Grid key={`recording-topic-${i}`} item>
                                <Typography variant="h5">{k}</Typography>
                                <List>
                                    {recordings[k].map((e, j) => {
                                        return (
                                            <ListItem
                                                disableGutters
                                                key={`recording-topic-${i}-${j}`}
                                                secondaryAction={
                                                    <IconButton
                                                        onClick={() => window.open(e.link, "_blank")}
                                                    >
                                                        <OpenInNew />
                                                    </IconButton>
                                                }
                                            >
                                                <ListItemText
                                                    primary={e.title}
                                                    secondary={`${getRecordingDate(e.time)} (local time)`}
                                                />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            </Grid>
                        );
                    })}
                </Grid>
            </Paper>
        </section>
        <Footer />
        </>
    );
};

export default Recordings;