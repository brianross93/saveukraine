import React from "react";
import { AppBar, Button, Container, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
    const links = [
        { link: "tuners", name: "Listen" },
        { link: "frequencies", name: "Frequencies" },
        { link: "recordings", name: "Recordings" },
        { link: "submit", name: "Submit Recording" },
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#005bbb" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Russian Military Radio Communications
                    </Typography>
                    {links.map((e) => {
                        return (
                            <Button
                                key={`nav-${e.link}`}
                                color="inherit"
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                    textTransform: "none",
                                }}
                                href={`#${e.link}`}
                            >
                                {e.name}
                            </Button>
                        );
                    })}
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="open menu"
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" }
                        }}
                    >
                        {links.map((e) => {
                            return (
                                <MenuItem key={`menu-${e.link}`} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link
                                            href={`#${e.link}`}
                                            color="inherit"
                                            sx={{ textDecoration: "none" }}
                                        >
                                            {e.name}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            );
                        })}
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default Navigation;