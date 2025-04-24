import { useId } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = () => {
  type navigationItem = {
    id: string | number;
    name: string;
    link: string;
    isLoginButton?: boolean;
  };
  const navigation: navigationItem[] = [
    {
      id: useId(),
      name: "Zakłady",
      link: "/zaklady",
    },
    {
      id: useId(),
      name: "Kasyno online",
      link: "/kasyno-online",
    },
    {
      id: useId(),
      name: "Na żywo",
      link: "/na-zywo",
    },
    {
      id: useId(),
      name: "Promocje",
      link: "/promocje",
    },
    {
      id: useId(),
      name: "Zaloguj",
      link: "/logowanie",
      isLoginButton: true,
    },
  ];
  return (
    <div className="header">
      <div>
        <img src={`./halibet-logo.png`} alt="logo" width={140} />
      </div>
      <div>
        <ul className="nav-list">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                to={`/halibet${item.link}`}
                className={
                  item.isLoginButton
                    ? "login-button link-router"
                    : "nav-link link-router"
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
