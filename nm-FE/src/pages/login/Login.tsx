import "../../components/forms/form.css";
import { Typography } from "antd";
import axios from "axios";
import { initializeInterceptors } from "../../utils/interceptor";
import LoginForm from "../../components/forms/loginForm";
function Login(props: { interceptorId: number }) {
  const { Title } = Typography;

  const onSuccessfullLogin: () => void = () => {
    axios.interceptors.request.eject(props.interceptorId);
    initializeInterceptors();
  };

  return (
    <div className="form">
      <div className="form_center">
        <div className="form_wrapper">
          <Title className="form_title">Log In</Title>
          <LoginForm onSuccessfullLogin={onSuccessfullLogin} />
          Or <a href="/register"> Create an account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
