/* eslint-disable no-unused-vars */
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
} from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

function createData(uid, name) {
    return { uid, name };
}

export const TableEvolutions = ({ role, evaluations }) => {
    const rows = evaluations.map((evaluation) => {
        return createData(evaluation._id, evaluation.name);
    });
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
                            acciones
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
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

                            <TableCell align="right">
                                <Grid2 container spacing={3}>
                                    <Grid2 size={6}>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            fullWidth
                                        >
                                            Seleccionar evaluación
                                        </Button>
                                    </Grid2>
                                    <Grid2 size={6}>
                                        <Link
                                            to={`/dashboard/evaluation/edit/${row.uid}`}
                                        >
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                fullWidth
                                            >
                                                Editar evaluación
                                            </Button>
                                        </Link>
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
