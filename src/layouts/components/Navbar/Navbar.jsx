/* eslint-disable react/prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AppBar, Badge, IconButton, Toolbar } from "@mui/material";

export const Navbar = ({ drawerWidth = 240 }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "navbar.main",
                width: {
                    sm: `calc(100% - ${drawerWidth}px)`,
                    ml: {
                        sm: `${drawerWidth}px`,
                    },
                },
                zIndex: 1,
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon
                        sx={{
                            color: "custom.main",
                        }}
                    />
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                    }}
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon
                            sx={{
                                color: "custom.main",
                            }}
                        />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
