import CreateStudent from "../pages/admin/CreateStudent";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";

export const facultyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard />,
    },
    {
        name: "User Management",
        path: "dashboard",
        children: [
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />,
            },
        ],
    },
]