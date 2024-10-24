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
import "./styles.css";

function createData(title, value) {
    return { title, value };
}

export const TableAnswers = ({ answers, setAnswers }) => {
    const rows = answers.map((answer) =>
        createData(answer.title, answer.value)
    );

    const deleteAnswer = (data) => {
        const resultado = answers.filter((answer) => answer.title != data);
        setAnswers(resultado);
    };

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
                            Titulo de la respuesta
                        </TableCell>

                        <TableCell
                            className="textColoHeaderTable"
                            align="center"
                        >
                            Valor
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
                    {rows.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                No hay data
                            </TableCell>
                        </TableRow>
                    ) : (
                        rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>

                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {row.value}
                                </TableCell>

                                <TableCell align="right">
                                    <Grid2 container spacing={2}>
                                        <Grid2 size={12}>
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                                onClick={() =>
                                                    deleteAnswer(row.title)
                                                }
                                            >
                                                eliminar
                                            </Button>
                                        </Grid2>
                                    </Grid2>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
