import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../../../api/api";
import { useForm } from "../../../../hooks/useForm";
import { LayoutComponent } from "../../../../layouts/LayoutComponent";
import { TableAnswers } from "./TableAnswers";
import { TableQuestions } from "./TableQuestions";

export const EditEvaluation = () => {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        api.get(`/evaluations/${id}`).then(({ data }) => {
            setData(data.evaluation.name);
            setAnswers(data.evaluation.answers);
            setQuestions(data.evaluation.questions);
        });
    }, [id]);

    const [formValues, handleInputChange] = useForm({
        title: "",
        value: "",
        question: "",
        name: data || "",
    });

    const { title, value, question, name } = formValues;

    const handleSaveAnswers = () => {
        if (answers.length > 0) {
            setAnswers([...answers, { title, value }]);
        } else {
            setAnswers([{ title, value }]);
        }
    };

    const handleSaveQuestion = () => {
        if (questions.length > 0) {
            setQuestions([...questions, question]);
        } else {
            setQuestions([question]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            name,
            answers,
            questions,
        };

        api.put(`/evaluations/${id}`, body)
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
                navigate("/dashboard/evaluations");
            })
            .catch(({ response }) => {
                const { msg } = response.data;
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
            });
    };

    return (
        <LayoutComponent>
            <Box component="form" onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="body1" color="initial">
                        Editar Evoluciones
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit"
                    >
                        guardar
                    </Button>
                </Box>

                <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                        mt: 5,
                    }}
                >
                    Titulo de la Evaluación
                </Typography>
                <Grid2 container spacing={2} alignItems="center" sx={{ mt: 5 }}>
                    <Grid2 size={7}>
                        <TextField
                            id="outlined-basic"
                            label="Ingrese titulo de la evaluación"
                            variant="outlined"
                            fullWidth
                            size="small"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                    </Grid2>
                </Grid2>

                <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                        mt: 5,
                    }}
                >
                    Ingresar el rango de valor y respuestas
                </Typography>
                <Grid2 container spacing={2} alignItems="center" sx={{ mt: 5 }}>
                    <Grid2 size={7}>
                        <TextField
                            id="outlined-basic"
                            label="Ingrese titulo de la respuesta"
                            variant="outlined"
                            fullWidth
                            size="small"
                            name="title"
                            value={title}
                            onChange={handleInputChange}
                        />
                    </Grid2>
                    <Grid2 size={2}>
                        <TextField
                            id="outlined-basic"
                            label="Ingrese valor"
                            variant="outlined"
                            fullWidth
                            type="number"
                            size="small"
                            name="value"
                            value={value}
                            onChange={handleInputChange}
                        />
                    </Grid2>
                    <Grid2 size={3}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleSaveAnswers}
                        >
                            agregar
                        </Button>
                    </Grid2>
                    <Grid2 size={12}>
                        <TableAnswers
                            answers={answers}
                            setAnswers={setAnswers}
                        />
                    </Grid2>
                </Grid2>

                <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                        mt: 5,
                    }}
                >
                    Ingresar cada una de las preguntas
                </Typography>
                <Grid2 container spacing={2} alignItems="center" sx={{ mt: 5 }}>
                    <Grid2 size={10}>
                        <TextField
                            id="outlined-basic"
                            label="Ingrese titulo de la respuesta"
                            variant="outlined"
                            fullWidth
                            size="small"
                            name="question"
                            value={question}
                            onChange={handleInputChange}
                        />
                    </Grid2>

                    <Grid2 size={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleSaveQuestion}
                        >
                            agregar
                        </Button>
                    </Grid2>

                    <Grid2 size={12}>
                        <TableQuestions
                            questions={questions}
                            setQuestions={setQuestions}
                        />
                    </Grid2>
                </Grid2>
            </Box>
        </LayoutComponent>
    );
};
