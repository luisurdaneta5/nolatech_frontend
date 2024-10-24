import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { LayoutComponent } from "../../layouts/LayoutComponent";

export const DashboardPage = () => {
    const { name } = useSelector((state) => state.auth.user);
    return (
        <LayoutComponent>
            <Typography variant="h6" color="initial">
                Inicio
            </Typography>
            <Grid
                container
                spacing={0}
                display="flex"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
            >
                <Grid>
                    <Typography variant="h6" color="initial">
                        Bienvenido {name} a la aplicación Technical Test
                    </Typography>
                </Grid>
            </Grid>
        </LayoutComponent>
    );
};
