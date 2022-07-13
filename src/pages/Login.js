import LoginForm from "../components/login/LoginForm";
import "./Pages.css";
import LoginDetails from "../components/login/LoginDetails";

const Login = (props) => {
  return (
    <div className="login-page">
      <LoginDetails />
      <LoginForm />
    </div>
  );
};
export default Login;
