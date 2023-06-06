import React, { useState } from "react";
import logo from "./logo.svg";
import { LOCAL_STORAGE, getDataSession } from "./helpers/session";
import { Navigate, Outlet } from "react-router-dom";
import { Button, Drawer, Dropdown, Layout, Menu, MenuProps, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";
import { MosanLogo } from "./assets/svg";
import { useLogin } from "./hooks/useLogin";

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const isLogin = getDataSession(LOCAL_STORAGE, "isLogin");
  const { logoutAccount } = useLogin();
  // const { isAvailableRoute } = useCurrenPath();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  const showDrawer = () => {
    setCollapsed(true);
  };

  const onClose = () => {
    setCollapsed(false);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          // target="_blank"
          // rel="noopener noreferrer"
          // href="https://www.antgroup.com"
          onClick={logoutAccount}
        >
          Logout
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
  ];

  const navMenu = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Channel",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];

  return (
    <Layout>
      <Sider width={300} trigger={null} collapsible collapsed={collapsed}>
        <div className="flex items-center justify-between px-1 py-4">
          <div className="text-white flex items-center pl-1">
            <img alt="mosan_logo" width={26} height={26} src={MosanLogo} />
            {!collapsed && <span className="text-[16px]">Mosan</span>}
          </div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              color: "white",
            }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={navMenu}
        />
      </Sider>
      <Layout>
        <Header className="text-end">
          <Dropdown
            menu={{ items }}
            placement="bottom"
            className=" text-[16px] bg-slate-200 rounded-full"
          >
            <UserOutlined className="p-2 " />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
