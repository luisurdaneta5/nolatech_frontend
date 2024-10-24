import api from "../../../api/api";
import { setEmployees, startLoadingEmployees } from "./employeesSlices";

export const startGetEmployees = () => {
    return async (dispatch) => {
        dispatch(startLoadingEmployees());
        try {
            await api.get("/employees").then(({ data }) => {
                console.log(data.employees);
                dispatch(setEmployees(data.employees));
            });
        } catch (error) {
            console.log(error);
        }
    };
};
