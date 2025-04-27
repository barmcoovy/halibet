import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm.tsx";
import RegisterForm from "./components/RegisterForm.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/halibet" element={<App />} />
        <Route path="/halibet/logowanie" element={<LoginForm />} />
        <Route path="/halibet/rejestracja" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
