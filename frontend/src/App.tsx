import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Bets from "./components/Bets";

function App() {
  return (
    <>
      <Routes>
        <Route path="/bets" element={<Bets />} />
        {/* <Route path="/zaklady" element={<Zaklady />} /> */}
      </Routes>
      <Header />
    </>
  );
}

export default App;
