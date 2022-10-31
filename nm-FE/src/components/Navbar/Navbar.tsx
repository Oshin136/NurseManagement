import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setIsUserLoggedIn } from "../../reducers";
import { clearUserLoginFromLocalStorage } from "../../utils/localStorage";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="nav_wrapper">
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["nurses"]}
        overflowedIndicator={<MenuOutlined />}
        className="nav_wrapper"
      >
        <Menu.Item key="add-nurses">
          <Link to="/nurses/add"> Add nurses </Link>
        </Menu.Item>
        <Menu.Item key="nurses">
          <Link to="/nurses"> Nurses </Link>
        </Menu.Item>
        <Menu.Item key="login" style={{ marginLeft: "auto" }}>
          <span
            onClick={() => {
              clearUserLoginFromLocalStorage();
              dispatch(setIsUserLoggedIn(false));
              navigate("/login");
            }}
          >
            Log Out
          </span>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
