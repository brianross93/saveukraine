import React from "react";
import { Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import recordings from "./recordings.json";
import moment from "moment";
import { OpenInNew } from "@mui/icons-material";






const Recordings = () => {
    const getRecordingDate = (unix) => {
        return moment.unix(unix).utcOffset(2).format("MMM Do, YYYY, hh:mm A");
    };
    return (
        <section id="recordings">
            <Paper sx={{ p: 4 }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid
                        item

                        sx={{ 
                            mb: 9
                         }}

                         

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
                                                    secondary={`${getRecordingDate(e.time)} (UKR time)`}
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
    );
};
//
// export default Recordings;

// Refactoring the above so that the title, time, and link for all json items in recordings.json will display with page styling
// Creating a react component to do this
// Code:


export default Recordings;