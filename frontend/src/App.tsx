import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import LoginForm from "./components/LoginForm";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/halibet/logowanie";
  return (
    <>
      <Routes>
        {/* <Route path="/halibet" element={<Main />} /> */}
        {isLoginPage ? (
          <Route path="/halibet/logowanie" element={<LoginForm />} />
        ) : null}
        {/* <Route path="/bets" element={<Bets />} /> */}
        {/* <Route path="/zaklady" element={<Zaklady />} /> */}
      </Routes>
      <Header />

      <Main>
        <Routes>
          {/* <Route path="/bets" element={<Bets />} />
          <Route path="/zaklady" element={<Zaklady />} /> */}
        </Routes>
      </Main>
    </>
  );
}

export default App;
