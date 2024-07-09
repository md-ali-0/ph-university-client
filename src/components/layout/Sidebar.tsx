import { Layout, Menu } from "antd";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemGenerator";

const { Sider } = Layout;

const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: 'student',
}

const Sidebar = () => {
    const user = useAppSelector(selectCurrentUser);
    let sidebarItems 

    switch(user!.role){
        case userRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN)
            break
        case userRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY)
            break
        case userRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.STUDENT)
            break
        default :
            break
    }


    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div
                style={{
                    color: "white",
                    textAlign: "center",
                    padding: "18px 0",
                    borderBottom: "1px solid #000"
                }}
            >
                <h3 style={{ fontSize: "20px" }}>PH University</h3>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["4"]}
                items={sidebarItems}
            />
        </Sider>
    );
};

export default Sidebar;
