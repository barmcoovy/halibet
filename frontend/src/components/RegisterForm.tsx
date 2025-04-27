import { useEffect, useState } from "react";
import "../styles/RegisterForm.css";
import ButtonSubmitComponent from "./ButtonSubmitComponent";
import ToMainPageIconComponent from "./ToMainPageIconComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faXmark } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "./ProgressBar";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [pesel, setPesel] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");
  const [isBirthSameAsPesel, setIsBirthSameAsPesel] = useState<boolean>(false);
  const [isAdult, setIsAdult] = useState<boolean>(false);

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

      if (value.length === 8) {
        const day = parseInt(value.slice(0, 2), 10);
        const month = parseInt(value.slice(2, 4), 10);
        const year = parseInt(value.slice(4, 8), 10);

        const today = new Date();
        const birthDate = new Date(year, month - 1, day);

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
          age--;
        }
        if (age >= 18) {
          setIsAdult(true);
        } else {
          setIsAdult(false);
        }
      }
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

  const validatePesel = () => {
    if (pesel.length !== 11) {
      console.log("Invalid PESEL: Incorrect length");
      return false;
    }

    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    const sum = pesel
      .split("")
      .slice(0, 10)
      .reduce((acc, digit, index) => acc + parseInt(digit) * weights[index], 0);

    const controlDigit = (10 - (sum % 10)) % 10;

    if (controlDigit === parseInt(pesel[10])) {
      console.log("Valid PESEL:", { firstName, surname, pesel, birthDate });
      let birthDatePesel: string = pesel.slice(0, 6);
      let year: string = birthDatePesel.slice(0, 2);
      if (parseInt(birthDatePesel[2]) > 1) {
        year = "20" + year;
      } else {
        year = "19" + year;
      }
      let month: string = "0" + (parseInt(birthDatePesel.slice(2, 4)) - 20);
      let day: string = "0" + parseInt(birthDatePesel.slice(4, 6));
      let birthDatePeselFormatted: string = `${day}-${month}-${year}`;
      if (birthDate !== birthDatePeselFormatted) {
        setIsBirthSameAsPesel(true);
      }
      return true;
    } else {
      console.log("Invalid PESEL: Control digit mismatch");
      return false;
    }
  };

  return (
    <div className="register-container">
      <div className="container">
        <ToMainPageIconComponent />

        <div className="register-form">
          <h1 className="register-title">Załóż konto</h1>
          <ProgressBar progress={25} />
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              validatePesel();
            }}
          >
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
            {!isAdult && birthDate.length === 10 ? (
              <div className="input-error message">
                <span>
                  <FontAwesomeIcon icon={faXmark} />
                </span>
                <span>Musisz mieć ukończone 18 lat, aby założyć konto</span>
              </div>
            ) : null}
            {birthDate.length > 0 && birthDate.length < 10 && (
              <div className="input-error message">
                <span>
                  <FontAwesomeIcon icon={faXmark} />
                </span>
                <span>Nieprawidłowy format daty</span>
              </div>
            )}

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
