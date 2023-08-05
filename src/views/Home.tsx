// const Home = () => {
//   return <div className="home">this is component Home</div>;
// };
import React, { useState } from "react";

import { Breadcrumb, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* 左侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <MainMenu></MainMenu>
      </Sider>
      {/* 右侧 */}
      <Layout>
        {/* 顶部白边 */}
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
          }}
        >
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: "64px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 右侧内容 */}
        <Content style={{ margin: "16px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", height: "48px" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;
