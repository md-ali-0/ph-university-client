import AcademicDepartment from "../pages/admin/academicMangement/academicDepartment";
import AcademicFaculty from "../pages/admin/academicMangement/academicFaculty";
import AcademicSemester from "../pages/admin/academicMangement/academicSemester";
import CreateAcademicDepartment from "../pages/admin/academicMangement/createAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicMangement/createAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicMangement/createAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData";

export const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard />,
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Create A. Semester",
                path: "create-academic-semester",
                element: <CreateAcademicSemester />,
            },
            {
                name: "Academic Semester",
                path: "academic-semester",
                element: <AcademicSemester />,
            },
            {
                name: "Create  A. Faculty",
                path: "create-academic-faculty",
                element: <CreateAcademicFaculty />,
            },
            {
                name: "Academic Faculty",
                path: "academic-faculty",
                element: <AcademicFaculty />,
            },
            {
                name: "Create  A. Department",
                path: "create-academic-department",
                element: <CreateAcademicDepartment />,
            },
            {
                name: "Academic Department",
                path: "academic-department",
                element: <AcademicDepartment />,
            },
        ],
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin />,
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty />,
            },
            {
                name: "Create Student",
                path: "create-student",
                element: <CreateStudent />,
            },
            {
                name: "Students",
                path: "all-students",
                element: <StudentData />,
            },
        ],
    },
];
