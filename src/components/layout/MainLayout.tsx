import { Button, Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";

import { logOut } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import Sidebar from "./Sidebar";

const { Header, Content } = Layout;

const MainLayout: FC = () => {
    const dispatch = useAppDispatch()
    const handleLogout = () =>{
        dispatch(logOut())
    }
    return (
        <Layout style={{ height: "100vh" }}>
            <Sidebar />
            <Layout>
                <Header style={{ display: "flex", alignItems: "center" }}>
                    <Button onClick={handleLogout} type="primary">Logout</Button>
                </Header>
                <Content style={{ margin: "24px 16px 0" }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
