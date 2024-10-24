import { toast } from "react-toastify";
import api from "../../../api/api";
import {
    setEvaluation,
    setEvaluations,
    startLoadingEvaluation,
} from "./evaluationSlices";

export const getEvaluations = () => {
    return async (dispatch) => {
        await dispatch(startLoadingEvaluation());

        try {
            await api.get("/evaluations").then(({ data }) => {
                dispatch(setEvaluations(data.evaluations));
            });
        } catch (error) {
            const { msg } = error.data;
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
    };
};

export const getEvaluation = (id) => {
    return async (dispatch) => {
        dispatch(startLoadingEvaluation());
        try {
            await api.get(`/evaluations/${id}`).then(({ data }) => {
                dispatch(setEvaluation(data.evaluation));
            });
        } catch (error) {
            const { msg } = error.data;
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
    };
};
