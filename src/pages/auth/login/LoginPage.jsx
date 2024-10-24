import styled from "@emotion/styled";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Box,
    Button,
    FormControl,
    Grid2,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { startLogin } from "../../../store/slices/auth/thunks";

const Item = styled(Paper)(() => ({
    padding: "10px 40px",
    textAlign: "center",
}));
export const LoginPage = () => {
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { email, password } = formValues;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(startLogin(email, password));
    };
    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Grid2
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid2 xs={12}>
                    <Item
                        size={{ xs: 6, md: 8 }}
                        sx={{
                            width: {
                                xs: "300px",
                                sm: "400px",
                                md: "500px",
                                lg: "500px",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                mt: 3,
                            }}
                        >
                            <Typography variant="h6" color="initial">
                                Iniciar sesión
                            </Typography>
                            <Grid2 container spacing={3} sx={{ mt: 3 }}>
                                <Grid2
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    size={12}
                                >
                                    <TextField
                                        id="outlined-basic"
                                        label="Correo Electrónico"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                </Grid2>
                                <Grid2
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    size={12}
                                >
                                    <FormControl
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    >
                                        <InputLabel>Contraseña</InputLabel>
                                        <OutlinedInput
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label={
                                                            showPassword
                                                                ? "hide the password"
                                                                : "display the password"
                                                        }
                                                        onClick={
                                                            handleClickShowPassword
                                                        }
                                                        edge="end"
                                                    >
                                                        {showPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Contraseña"
                                            name="password"
                                            value={password}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </FormControl>
                                </Grid2>
                                <Grid2
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    size={12}
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        INGRESAR
                                    </Button>
                                </Grid2>
                                <Grid2
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    size={12}
                                >
                                    <Typography
                                        color="initial"
                                        display="flex"
                                        sx={{
                                            fontSize: {
                                                xs: "0.8rem",
                                                sm: "0.9rem",
                                                md: "0.9rem",
                                            },
                                            mb: 2,
                                        }}
                                    >
                                        No posees una cuenta regístrate
                                        <Box
                                            sx={{
                                                ml: 0.5,
                                                textDecoration: "none",
                                            }}
                                        >
                                            <Link to="/register">aquí</Link>
                                        </Box>
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </Box>
                    </Item>
                </Grid2>
            </Grid2>
        </Box>
    );
};
