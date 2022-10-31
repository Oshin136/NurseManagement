import { Button, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { register } from "../../interfaces/register";
import { BASE_URL } from "../../constants/common";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string>(" ");
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };
  const onFinish = async (values: register) => {
    if (values.password !== values.confirmpassword) {
      setErrMsg("Password do not match");
      return;
    }
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      await axios.post("/register", userData);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form {...layout} onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Enter Password" />
      </Form.Item>

      <Form.Item
        name="confirmpassword"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>
      <div style={{ color: "red", marginBottom: "15px" }}>{errMsg}</div>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
