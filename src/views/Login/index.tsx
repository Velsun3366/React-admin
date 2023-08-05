import { useEffect } from "react";
import styles from "./login.module.scss";
import "./login.scss";
import Circle from "@/components/Canvas/Circle/circle.js";
import { Button, Input, Space } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
const Login = () => {
  useEffect(() => {
    Circle();
    window.onresize = function () {
      Circle();
    };
  });
  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: "block" }}></canvas>
      <div className={styles.loginBox}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>通用后台系统</h1>
          <p>work hard</p>
        </div>
        {/* 登录框 */}
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Input placeholder="用户名" prefix={<UserOutlined />} />
          <Input.Password
            placeholder="密码"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          <Button type="primary" block>
            登录
          </Button>
        </Space>
      </div>
    </div>
  );
};
export default Login;
