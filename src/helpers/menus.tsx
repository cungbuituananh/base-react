import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

const menus = [
  {
    key: "/channel",
    icon: <UserOutlined />,
    label: "Channel",
    role: [],
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
    ],
  },
];

export const getLeftMenu = () => {};
