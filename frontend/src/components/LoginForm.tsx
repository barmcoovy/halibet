import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../styles/LoginForm.css";
import { useState } from "react";
import ToMainPageIconComponent from "./ToMainPageIconComponent";
const LoginForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  return (
    <div className="login-form-container">
      <div className="margin-default">
        <ToMainPageIconComponent />

        <div className="login-form">
          <h2>Zaloguj</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="username">Nazwa użytkownika</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Hasło</label>
              <div className="password-container">
                <input
                  className="password-input"
                  {...(isPasswordVisible
                    ? { type: "text" }
                    : { type: "password" })}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isPasswordVisible ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className="password-icon"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className="password-icon"
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  />
                )}
              </div>
            </div>
            <button type="submit" className="login-form-submitBtn">
              Zaloguj się
            </button>
          </form>
          <div className="forgot-password">
            <p>Nie pamiętasz hasła?</p>
          </div>
          <div className="register-link-container">
            <p>Nie masz jeszcze konta?</p>
            <Link
              to="/halibet/rejestracja"
              className="link-router  create-account-link"
            >
              Zarejestruj się
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
