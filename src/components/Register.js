import React, {useRef, useState} from "react";
import {Users} from './databases/Users';

const Register = ({ isEnable, register,login, close }) => {

  function Register(){
    close();
  }
  return (
    <div>
      {isEnable ? (
        <div className="h-[100vh] w-full bg-[rgba(0,0,0,0.8)] z-10 absolute flex items-center justify-center">
          <div className=" bg-white w-[400px] h-[550px] rounded-lg flex flex-col justify-around">
            <div
              className="flex flex-col items-center justify-center my-6 gap-5"
            >
              {register ? (
                <h1 className="text-2xl font-bold">ZAREJESTRUJ SIĘ</h1>
              ) : (
                ("")
              )}
              <label htmlFor="username">Nazwa użytkownika</label>
              <input
                type="text"
                placeholder="Nazwa użytkownika"
                id="username"
                className="bg-gray-500 text-white w-[60%] h-[30px] rounded-md outline-none"
              />
              <label htmlFor="password">Hasło</label>
              <input
                type="password"
                placeholder="Hasło"
                id="password"
                className="bg-gray-500 text-white w-[60%] h-[30px] rounded-md outline-none"
              />
              <input
                onClick={Register}
                type="submit"
                value={register ?  "Zarejestruj się" :  (" ")}
                className="bg-blue-500 p-2 w-[200px] rounded-md text-white cursor-pointer"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              {login ? (
                <p>
                  Masz już konto?{" "}
                  <span className="font-bold cursor-pointer" onClick={login}>
                    Zaloguj się
                  </span>
                </p>
              ) : (" ")
              }
              <p className="mb-4 cursor-pointer font-bold" onClick={close}>
                Anuluj
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className=" hidden h-[100vh] w-full bg-[rgba(0,0,0,0.63)] z-10 absolute "></div>
      )}
    </div>
  );
};

export default Register;
