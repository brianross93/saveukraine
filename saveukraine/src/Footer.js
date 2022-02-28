import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                height: "400px",
                width: "100%",
                mt: 10
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#005bbb",
                    height: "50%"
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                >
                    <Typography variant="h5" color="secondary" align="center">
                        For anyone who can translate Russian, please contact us on <Link href="https://twitter.com/CashmanDian" target="_blank" color="secondary">Twitter</Link>
                    </Typography>
                    <Typography variant="h5" color="secondary" align="center">
                        If you want to support us, consider donating to us!
                    </Typography>
                    <Typography variant="body1" color="secondary" align="center">
                        ETH: 0x15A027868f65a2391fab228C900BDc2291Eb6b2c
                    </Typography>
                </Grid>
            </Box>
            <Box
                sx={{
                    backgroundColor: "#ffd500",
                    height: "50%"
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: "100%" }}
                >
                    <Typography variant="h4" color="primary" align="center">
                        Слава Україні!
                    </Typography>
                </Grid>
            </Box>
        </Box>
    );
};

export default Footer;