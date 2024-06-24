import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { CiUser } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {Users} from './databases/Users'

const Header = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setUser] = useState({});
  const [freebet,setFreebet] = useState(0);
  const [saldo,setSaldo] = useState(0);
  const HandleLoginClick = () => {
    setLogin(true);
    setRegister(false);
  };

  const HandleRegisterClick = () => {
    setLogin(false);
    setRegister(true);
  };
  const HandleClose = () => {
    setLogin(false);
    setRegister(false);
  };

  return (
    <div className="relative">
      <Login
        isEnable={login}
        login={HandleLoginClick}
        register={HandleRegisterClick}
        close={HandleClose}
        isLoggedIn={setIsLoggedIn}
        setUser={setUser}
      />
      <Register
        isEnable={register}
        login={HandleLoginClick}
        register={HandleRegisterClick}
        close={HandleClose}
      />

      <div className="flex justify-between items-center w-full bg-blue-500 h-[4.2rem] text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold italic mx-4 block cursor-pointer">
            <a href="index.html">HaliBet</a>
          </h1>
          <ol className="hidden sm:flex gap-7 mx-4 sm:text-[.7rem] lg:text-[1rem]">
            <li className="block cursor-pointer hover:bg-blue-400/40 lg:p-3">
              <a href="#">Zakłady</a>
            </li>
            <li className="block cursor-pointer hover:bg-blue-400/40 lg:p-3 relative">
              <a href="#">Na żywo</a>
              <span className="absolute lg:right-0 lg:top-0 sm:-right-2 sm:-top-2 bg-black rounded-full lg:w-6 lg:h-5 sm:w-4 sm:h-3">
                <p className=" sm:text-[.5rem] lg:text-[.8rem] font-bold text-center">
                  51
                </p>
              </span>
            </li>
            <li className="block cursor-pointer hover:bg-blue-400/40 lg:p-3">
              <a href="#">HaliPewniaczki</a>
            </li>
            <li className="block cursor-pointer hover:bg-blue-400/40 lg:p-3">
              <a href="#">Gry karciane</a>
            </li>
            <li className="block cursor-pointer hover:bg-blue-400/40 lg:p-3">
              <a href="#">Promocje</a>
            </li>
          </ol>
        </div>
        <div>
          {!isLoggedIn ? (
            <ol className="mx-6 flex justify-between items-center gap-5">
              <li
                className="p-2 text-[.7rem] sm:text-[1rem] bg-blue-400/60 rounded-md cursor-pointer hover:bg-blue-400/80"
                onClick={HandleRegisterClick}
              >
                Załóż konto
              </li>
              <li
                className="p-2 text-[.7rem] sm:text-[1rem] bg-blue-400/60 rounded-md cursor-pointer hover:bg-blue-400/80"
                onClick={HandleLoginClick}
              >
                Zaloguj się
              </li>
            </ol>
          )
          : (
            <div key={user.id} className="flex items-center mx-6 gap-3">
              <FontAwesomeIcon icon={faUser} className="text-2xl cursor-pointer" />
              <h2  className="italic font-semibold text-[1rem]">{user.name} { user.surname}</h2>
              <p>Saldo: {user.deposit} zł</p>
              <p>Freebet: {user.freebet} zł</p>
            </div>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
