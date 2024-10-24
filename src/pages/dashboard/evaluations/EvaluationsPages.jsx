import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LayoutComponent } from "../../../layouts/LayoutComponent";
import { getEvaluations } from "../../../store/slices/evaluations/thunks";
import { TableEvolutions } from "./components/TableEvolutions";
export const EvaluationsPages = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { evaluations } = useSelector((state) => state.evaluations);

    useEffect(() => {
        dispatch(getEvaluations());
        // dispatch(setEvaluation({}));
    }, [dispatch]);

    return (
        <LayoutComponent>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="body1" color="initial">
                    Evaluaciones
                </Typography>

                {user.role === 1 && (
                    <Link to="/dashboard/evaluation/create">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                        >
                            Crear evaluación
                        </Button>
                    </Link>
                )}
            </Box>

            <TableEvolutions role={user.role} evaluations={evaluations} />
        </LayoutComponent>
    );
};
