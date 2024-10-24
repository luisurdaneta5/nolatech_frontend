import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { employeesSlice } from "./slices/employees/employeesSlices";
import { evaluationSlice } from "./slices/evaluations/evaluationSlices";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        employees: employeesSlice.reducer,
        evaluations: evaluationSlice.reducer,
    },
    devTools: true,
});
