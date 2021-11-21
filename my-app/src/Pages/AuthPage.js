import "./AuthPage.css";

import LoginForm from "../Components/LoginForm";

const AuthPage = (props) => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm auth={props.auth} />
    </div>
  );
};

export default AuthPage;
