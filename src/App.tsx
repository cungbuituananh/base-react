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
import ThemeLayout from "./theme/ThemeLayout";

function App() {
  const isLogin = getDataSession(LOCAL_STORAGE, "isLogin");

  // // const { isAvailableRoute } = useCurrenPath();
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  // const items: MenuProps["items"] = [
  //   {
  //     key: "1",
  //     label: <a onClick={logoutAccount}>Logout</a>,
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <a
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         href="https://www.aliyun.com"
  //       >
  //         2nd menu item
  //       </a>
  //     ),
  //   },
  // ];

  const navMenu = [
    {
      key: "/channel",
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
    <>
      <ThemeLayout />
    </>
  );
}

export default App;
