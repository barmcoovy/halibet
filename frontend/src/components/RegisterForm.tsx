// import { useState } from "react";
import "../styles/RegisterForm.css";
import ToMainPageIconComponent from "./ToMainPageIconComponent";
const RegisterForm = () => {
  // const [firstName, setFirstName] = useState<string>("");
  // const [surname, setSurname] = useState<string>("");
  // const [pesel, setPesel] = useState<string>("");
  // const [birthDate, setBirthDate] = useState<string>("");
  return (
    <div className="register-container">
      <div className="margin-default">
        <ToMainPageIconComponent />
      </div>
    </div>
  );
};

export default RegisterForm;
