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

function createData(question) {
    return { question };
}

export const TableQuestions = ({ questions, setQuestions }) => {
    const rows = questions.map((question) => createData(question));

    const deleteQuestion = (data) => {
        const resultado = questions.filter((question) => question != data);
        setQuestions(resultado);
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
                            Pregunta
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
                                    {row.question}
                                </TableCell>

                                <TableCell align="right">
                                    <Grid2 container spacing={2}>
                                        <Grid2 size={12}>
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                                onClick={() =>
                                                    deleteQuestion(row.question)
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
