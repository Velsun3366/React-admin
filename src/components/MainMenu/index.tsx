import { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem("Option 1", "page1", <PieChartOutlined />),
//   getItem("Option 2", "page2", <DesktopOutlined />),
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("Tom", "3"),
//     getItem("Bill", "4"),
//     getItem("Alex", "5"),
//   ]),
//   getItem("Team", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];
const items: MenuItem[] = [
  { label: "Option 1", key: "/page1", icon: <PieChartOutlined /> },
  { label: "Option 2", key: "/page2", icon: <DesktopOutlined /> },
  {
    label: "User",
    key: "sub1",
    icon: <UserOutlined />,
    children: [
      { label: "sub1-1", key: "/sub1/sub1-1" },
      { label: "Bill", key: "4" },
      { label: "Alex", key: "5" },
    ],
  },
  {
    label: "Team",
    key: "sub2",
    icon: <TeamOutlined />,
    children: [
      { label: "Team 1", key: "6" },
      { label: "Team 2", key: "8" },
    ],
  },
  { label: "Files", key: "9", icon: <FileOutlined /> },
];
const MainMenu: React.FC = () => {
  // 当前路由
  const currentRoute = useLocation();
  // 菜单默认初始项
  let defaultOpenkeys: string = currentRoute.pathname;
  const findKey = (obj: MenuItem[]) => {
    for (let i = 0; i < obj.length; i++) {
      if (!obj[i]!["children"]) continue;
      for (let j = 0; j < obj[i]!["children"].length; j++) {
        if (obj[i]!["children"][j].key === currentRoute.pathname) {
          defaultOpenkeys = obj[i]!.key as string;
          break;
        }
      }
    }
  };
  findKey(items);
  // 菜单展开项初始值
  const [openKeys, setOpenKeys] = useState([defaultOpenkeys]);
  // 路由跳转
  const navigateTo = useNavigate();
  const menuSelect = (e: { key: string }) => {
    // console.log("点击菜单", e.key);
    navigateTo(e.key);
  };
  // 菜单事件回调
  const handleOpenChange = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]]);
  };
  //  如果当前选中项无子菜单
  const currentSelectedKey = ({ key: curKey }: any) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i]!.key === curKey) {
        setOpenKeys([""]);
      }
    }
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuSelect}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
      onSelect={currentSelectedKey}
    />
  );
};

export default MainMenu;
