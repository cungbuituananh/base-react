import React, { useState } from "react";
import logo from "./logo.svg";
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
import { useLogin } from "../hooks/useLogin";
import { MosanLogo } from "../assets/svg";

export default function ThemeLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const { logoutAccount } = useLogin();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a onClick={logoutAccount}>Logout</a>,
    },
  ];

  return (
    <>
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
            defaultSelectedKeys={["/channel"]}
            items={[]}
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
    </>
  );
}
