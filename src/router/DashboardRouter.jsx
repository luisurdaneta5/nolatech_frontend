import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { EmployeesPages } from "../pages/dashboard/employees/employees";
import { EvaluationsPages } from "../pages/dashboard/evaluations/EvaluationsPages";
import { CreateEvaluation } from "../pages/dashboard/evaluations/components/CreateEvaluation";
import { EditEvaluation } from "../pages/dashboard/evaluations/components/EditEvaluation";

export const DashboardRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/employees" element={<EmployeesPages />} />
            <Route path="/evaluations" element={<EvaluationsPages />} />
            <Route path="/evaluation/create" element={<CreateEvaluation />} />
            <Route path="/evaluation/edit/:id" element={<EditEvaluation />} />
        </Routes>
    );
};
