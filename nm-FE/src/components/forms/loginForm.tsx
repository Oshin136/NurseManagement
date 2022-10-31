import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../interfaces/login";
import axios from "axios";
import "./form.css";
import { BASE_URL } from "../../constants/common";
import { addUserLoginToLocalStorage } from "../../utils/localStorage";
import { setIsUserLoggedIn } from "../../reducers/authSlice";

const LoginForm = (props: { onSuccessfullLogin: () => void }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };
  const onFinish = async (values: login) => {
    const loginData = {
      email: values.email,
      password: values.password,
    };

    try {
      const res = await axios({
        method: "post",
        url: BASE_URL + "/login",
        data: loginData,
      });
      const data = res.data.data;
      if (data) {
        addUserLoginToLocalStorage("true", data.accessToken, data.userId);
        dispatch(setIsUserLoggedIn(true));
        props.onSuccessfullLogin();
        navigate("/nurses");
      } else {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter Password" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
