import { createSlice } from "@reduxjs/toolkit";

export const evaluationSlice = createSlice({
    name: "evaluations",
    initialState: {
        isLoading: false,
        evaluations: [],
        evaluation: {},
    },
    reducers: {
        startLoadingEvaluation: (state) => {
            state.isLoading = true;
        },
        setEvaluations: (state, { payload }) => {
            state.evaluations = payload;
            state.isLoading = false;
        },
        setEvaluation: (state, { payload }) => {
            state.evaluation = payload;
            state.isLoading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { startLoadingEvaluation, setEvaluations, setEvaluation } =
    evaluationSlice.actions;
