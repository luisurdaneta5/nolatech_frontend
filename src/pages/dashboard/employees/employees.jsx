import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayoutComponent } from "../../../layouts/LayoutComponent";
import { startGetEmployees } from "../../../store/slices/employees";
import { TableEmployees } from "./components/TableEmployees";

export const EmployeesPages = () => {
    const dispatch = useDispatch();
    const { employees } = useSelector((state) => state.employees);

    useEffect(() => {
        dispatch(startGetEmployees());
    }, [dispatch]);

    return (
        <LayoutComponent>
            <Typography variant="body1" color="initial">
                Empleados
            </Typography>
            <TableEmployees employees={employees} />
        </LayoutComponent>
    );
};
