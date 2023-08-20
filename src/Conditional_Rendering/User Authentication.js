import { useState } from "react";

const LoginForm = () => {
  const [IsLogin, SetIsLogin] = useState(false);
  const [UserName, SetUserName] = useState();
  const [PassWord, SetPassWord] = useState();

  const HandleLogin = () => {
    UserName === "User" && PassWord === "Password"
      ? SetIsLogin(true)
      : SetIsLogin(false);
  };

  const HandleLogout = () => {
    SetIsLogin(false);
  };

  return (
    <div>
      {IsLogin ? (
        <div>
          Hi {UserName}!
          <button onClick={HandleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h6>LoginForm</h6>
          <input
            type="text"
            placeholder="Username"
            value={UserName}
            onChange={(e) => SetUserName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Password"
            value={PassWord}
            onChange={(e) => SetPassWord(e.target.value)}
          ></input>
          <button onClick={HandleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};
export default LoginForm;
