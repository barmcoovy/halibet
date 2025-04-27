import { useState } from "react";
import "../styles/RegisterForm.css";
import ButtonSubmitComponent from "./ButtonSubmitComponent";
import ToMainPageIconComponent from "./ToMainPageIconComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
const RegisterForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [pesel, setPesel] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= 8) {
      let formatted = "";
      if (value.length <= 2) {
        formatted = value;
      } else if (value.length <= 4) {
        formatted = `${value.slice(0, 2)}-${value.slice(2)}`;
      } else {
        formatted = `${value.slice(0, 2)}-${value.slice(2, 4)}-${value.slice(
          4
        )}`;
      }
      setBirthDate(formatted);
    }
  };
  const handlePeselChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPesel(value);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    if (value.length <= 20) {
      setFirstName(value);
    }
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, "");
    if (value.length <= 20) {
      setSurname(value);
    }
  };
  return (
    <div className="register-container">
      <div className="container">
        <ToMainPageIconComponent />
        <div className="register-form">
          <h1 className="register-title">Załóż konto</h1>
          <form className="form">
            <div className="input-group">
              <label className="input-label" htmlFor="first-name">
                Imię
              </label>
              <input
                className="input"
                type="text"
                id="first-name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            {}
            {(firstName.length > 0 && firstName.length < 2) ||
            firstName.length > 20 ? (
              <div className="input-error message">
                <span>
                  <FontAwesomeIcon icon={faXmark} />
                </span>
                <span>
                  Twoje imię musi się składać z minimun 2 znaków i maksymalnie
                  20 znaków
                </span>
              </div>
            ) : (
              <div className="input-hint message">
                <span>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </span>
                <span>
                  Należy podać prawdziwe imię, które występuje w dokumencie
                  tożsamości
                </span>
              </div>
            )}

            <div className="input-group">
              <label className="input-label" htmlFor="surname">
                Nazwisko
              </label>
              <input
                className="input"
                type="text"
                id="surname"
                value={surname}
                onChange={handleSurnameChange}
              />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="birth-date">
                Data urodzin (dd-mm-rrrr)
              </label>
              <input
                className="input"
                type="text"
                id="birth-date"
                maxLength={10}
                minLength={10}
                value={birthDate}
                onChange={handleBirthDateChange}
              />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="pesel">
                PESEL
              </label>
              <input
                className="input"
                type="text"
                id="pesel"
                value={pesel}
                onChange={handlePeselChange}
                minLength={11}
                maxLength={11}
              />
            </div>

            <ButtonSubmitComponent text="Kontynuuj" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
