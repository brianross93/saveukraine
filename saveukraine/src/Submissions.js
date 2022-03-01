// Creating a Submissions component to post submissions that people have sent in. 
// Code:
//

import React from "react";
import { Grid, IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import submissions from "./submissionrecordings.json";
import moment from "moment";
import { OpenInNew } from "@mui/icons-material";

const Submissions = () => {
    const getSubmissionDate = (unix) => {
        return moment.unix(unix).utcOffset(2).format("MMM Do, YYYY, hh:mm A");
    };
    return (
        <section id="submissions">
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
                            Submissions
                        </Typography>

                    </Grid>
                    {Object.keys(submissions).map((k, i) => {
                        return (
                            <Grid key={`submission-topic-${i}`} item>
                                <Typography variant="h5">{k}</Typography>
                                <List>
                                    {submissions[k].map((e, j) => {
                                        return (
                                            <ListItem
                                                disableGutters
                                                key={`submission-topic-${i}-${j}`}
                                                secondaryAction={
                                                    <IconButton
                                                        onClick={() => window.open(e.link, "_blank")}
                                                    >
                                                        <OpenInNew />
                                                    </IconButton>
                                                }
                                            >
                                                <ListItemText
                                                //Add title, date, description, and link to the list item
                                                    primary={e.title}
                                                    secondary= {e.description}
                                                    // secondary={getSubmissionDate(e.date)}
                                                    secondaryTypographyProps={{
                                                        variant: "body2"

                                                    }}
                                                    
                                                    
                                                    // grab description for ListItemText
                                                    
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


export default Submissions;


