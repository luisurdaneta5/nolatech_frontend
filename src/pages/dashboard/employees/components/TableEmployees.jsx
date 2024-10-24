/* eslint-disable react/prop-types */

import {
    Button,
    Grid2,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { typeUser } from "../../../../helpers";
import "./styles.css";

function createData(uid, name, rol) {
    return { uid, name, rol };
}

export const TableEmployees = ({ employees }) => {
    const { user } = useSelector((state) => state.auth);
    const rows = employees.map((employee) =>
        createData(employee._id, employee.name, employee.role)
    );

    return (
        <TableContainer
            component={Paper}
            sx={{
                mt: 5,
            }}
        >
            <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
            >
                <TableHead
                    sx={{
                        backgroundColor: "primary.main",
                    }}
                >
                    <TableRow>
                        <TableCell className="textColoHeaderTable">
                            Nombre
                        </TableCell>
                        <TableCell
                            className="textColoHeaderTable"
                            align="center"
                        >
                            Rol
                        </TableCell>
                        <TableCell
                            className="textColoHeaderTable"
                            align="right"
                        >
                            acciones
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                No hay data
                            </TableCell>
                        </TableRow>
                    )}
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="body1" color="initial">
                                    {typeUser(row.rol)}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Grid2 container spacing={2}>
                                    <Grid2 size={12}>
                                        {row.uid === user.uid ? (
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                            >
                                                Auto evaluarme
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                            >
                                                Aplicar evaluación
                                            </Button>
                                        )}
                                    </Grid2>
                                </Grid2>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
