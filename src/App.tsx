import { useState } from "react";

import router from "./router";
import { useRoutes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const RouterOutlet = useRoutes(router);
  return (
    <div className="App">
      {/* 顶级组件
      <Button type="primary">主要按钮</Button>
      <DownCircleOutlined style={{ fontSize: "40px" }} />
      <Comp1></Comp1> */}
      {/* <Link to="/home">Home</Link>|<Link to="/about">About</Link> */}
      {RouterOutlet}
    </div>
  );
}

export default App;
