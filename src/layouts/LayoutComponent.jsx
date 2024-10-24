/* eslint-disable react/prop-types */
import { Box, Toolbar } from "@mui/material";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./Components/Sidebar/Sidebar";

const drawerWidth = 280;
//80 mobile
export const LayoutComponent = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Navbar drawerWidth={drawerWidth} />
            <Sidebar drawerWidth={drawerWidth} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};
