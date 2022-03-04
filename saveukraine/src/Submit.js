import { Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";
import Submissions from "./Submissions";

const Submit = () => {
    return (
        <>
        <Navigation />
        <section id="submit">
            <Paper sx={{ p: 5 }}>
                <Grid container
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
                            Submit Recording
                        </Typography>
                    </Grid>
                    <Grid
                        item
                    >
                        <Typography variant="h5">
                            If you have any recordings, feel free to upload them to <Link href="https://archive.org/" target="_blank">archive.org</Link> and <Link href="https://forms.gle/muUSwLGr8S5qBR9m9" target="_blank">fill out this form</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </section>
        <section>
            <Submissions />

        </section>

        </>

    );


};



export default Submit;