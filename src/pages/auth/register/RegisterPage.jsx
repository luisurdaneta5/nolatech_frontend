import styled from "@emotion/styled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Grid2,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../api/api";
import { useForm } from "../../../hooks/useForm";

const Item = styled(Paper)(() => ({
    padding: "10px 40px",
    textAlign: "center",
}));
export const RegisterPage = () => {
    const navigate = useNavigate();
    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState([]);

    const { name, email, password, confirmPassword, role } = formValues;

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () =>
        setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrors({
                confirmPassword: {
                    msg: "Las contraseñas no coinciden",
                },
            });
            return;
        }
        api.post("/auth/register", formValues)
            .then(({ data }) => {
                toast.success(data.msg, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/login");
            })
            .catch(({ response }) => {
                const { errors, msg } = response.data;
                if (msg) {
                    toast.error(msg, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                setErrors(errors);
            });
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
                                Registro
                            </Typography>
                            <Grid2 container spacing={3} sx={{ mt: 3 }}>
                                <Grid2
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    size={12}
                                >
                                    <TextField
                                        label="Nombre"
                                        variant="outlined"
                                        size="small"
                                        name="name"
                                        value={name}
                                        fullWidth
                                        type="text"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </Grid2>
                                <Grid2
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    size={12}
                                >
                                    <TextField
                                        label="Correo Electrónico"
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        value={email}
                                        name="email"
                                        onChange={handleInputChange}
                                        type="email"
                                        required
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
                                    <FormControl
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                        error={
                                            errors?.confirmPassword?.msg
                                                ? true
                                                : false
                                        }
                                    >
                                        <InputLabel htmlFor="outlined-adornment-password">
                                            Repetir contraseña
                                        </InputLabel>
                                        <OutlinedInput
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label={
                                                            showConfirmPassword
                                                                ? "hide the password"
                                                                : "display the password"
                                                        }
                                                        onClick={
                                                            handleClickShowConfirmPassword
                                                        }
                                                        edge="end"
                                                    >
                                                        {showConfirmPassword ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Repetir contraseña"
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        {errors?.confirmPassword?.msg && (
                                            <FormHelperText id="outlined-weight-helper-text">
                                                {errors?.confirmPassword?.msg}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid2>
                                <Grid2
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    size={12}
                                >
                                    <FormControl>
                                        <FormLabel>Tipo de usuario</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            onChange={handleInputChange}
                                            value={role}
                                            name="role"
                                            required
                                        >
                                            <FormControlLabel
                                                value="1"
                                                control={<Radio />}
                                                label="Admin"
                                            />
                                            <FormControlLabel
                                                value="2"
                                                control={<Radio />}
                                                label="Manager"
                                            />
                                            <FormControlLabel
                                                value="3"
                                                control={<Radio />}
                                                label="Empleado"
                                            />
                                        </RadioGroup>
                                        {errors?.role?.msg && (
                                            <Box
                                                component="p"
                                                sx={{
                                                    color: "red",
                                                }}
                                            >
                                                {errors?.role?.msg}*, por favor
                                                seleccione uno
                                            </Box>
                                        )}
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
                                        registrarse
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
                                        Ya tienes una cuenta? Inicia sesión
                                        <Box
                                            sx={{
                                                ml: 0.5,
                                                textDecoration: "none",
                                            }}
                                        >
                                            <Link to="/login">aquí</Link>
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
