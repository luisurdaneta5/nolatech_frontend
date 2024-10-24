import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        isLoading: false,
        employees: [],
    },
    reducers: {
        startLoadingEmployees: (state) => {
            state.isLoading = true;
        },
        setEmployees: (state, action) => {
            state.employees = action.payload;
            state.isLoading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setEmployees, startLoadingEmployees } = employeesSlice.actions;
