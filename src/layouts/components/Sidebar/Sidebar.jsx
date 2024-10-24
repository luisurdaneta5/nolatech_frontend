/* eslint-disable react/prop-types */
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
    Box,
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLogout } from "../../../store/slices/auth/authSlices";

export const Sidebar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.clear();
        dispatch(setLogout());
    };

    return (
        <Box
            component="nav"
            sx={{
                width: {
                    sm: drawerWidth,
                },
                flexShrink: {
                    sm: 0,
                },
            }}
        >
            <Drawer
                variant="permanent"
                open={false}
                sx={{
                    display: {
                        xs: "block",
                    },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        backgroundColor: "primary.main",
                    },
                }}
            >
                <Toolbar>
                    <Link to="/">
                        <Typography variant="body1" color="white">
                            TECHNICAL TEST
                        </Typography>
                    </Link>
                </Toolbar>
                <Divider />
                <Box
                    sx={{
                        paddingLeft: "16px",
                        paddingRight: "16px",
                        mt: 5,
                    }}
                >
                    <List
                        sx={{
                            width: "100%",
                            maxWidth: 360,
                            color: "white",
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <Link to="/dashboard">
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon
                                        sx={{
                                            color: "white",
                                            fontSize: "20px",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Inicio"
                                    sx={{
                                        ".MuiListItemText-primary": {
                                            color: "white",
                                        },
                                        textDecoration: "none",
                                    }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link
                            to="/dashboard/employees"
                            sx={{
                                textDecoration: "none",
                            }}
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <PeopleAltIcon
                                        sx={{
                                            color: "white",
                                            fontSize: "20px",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Empleados"
                                    sx={{
                                        ".MuiListItemText-primary": {
                                            color: "white",
                                        },
                                        textDecoration: "none",
                                    }}
                                />
                            </ListItemButton>
                        </Link>

                        <Link to="/dashboard/evaluations">
                            <ListItemButton>
                                <ListItemIcon>
                                    <DescriptionIcon
                                        sx={{
                                            color: "white",
                                            fontSize: "20px",
                                        }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Evaluaciones"
                                    sx={{
                                        ".MuiListItemText-primary": {
                                            color: "white",
                                        },
                                        textDecoration: "none",
                                    }}
                                />
                            </ListItemButton>
                        </Link>

                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <ExitToAppIcon
                                    style={{ color: "white", width: "20px" }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary="Salir"
                                sx={{
                                    ".MuiListItemText-primary": {
                                        color: "white",
                                    },
                                }}
                            />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};
