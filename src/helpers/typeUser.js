export const typeUser = (rol) => {
    if (rol === 1) {
        return "Administrador";
    }
    if (rol === 2) {
        return "Manager";
    }
    if (rol === 3) {
        return "Empleado";
    }
};
