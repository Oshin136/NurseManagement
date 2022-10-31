import "../../components/forms/form.css";
import { Typography } from "antd";
import RegisterForm from "../../components/forms/registerForm";
function Register() {
  const { Title } = Typography;
  return (
    <div className="form">
      <div className="form_center">
        <div className="form_wrapper">
          <Title className="form_title">Sign up</Title>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
