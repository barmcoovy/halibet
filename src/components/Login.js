import React,{useRef} from "react";
import {Users} from './databases/Users';
const Login = ({ isEnable, login, register, close, isLoggedIn,setUser }) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
      function LogIn(event){
        event.preventDefault();
        const username = usernameRef.current.value;
        const password  = passwordRef.current.value;
        
        if(username!= "" && password != ""){
          for(let i =0;i< Users.length;i++){
            if(username == Users[i].username && password == Users[i].password){
                setUser({
                  "id": Users[i].id,
                  "name" : Users[i].name,
                  "surname" : Users[i].surname,
                  "deposit" : Users[i].deposit,
                  "freebet" : Users[i].freebet
                });
                isLoggedIn(true);
                close();
              
            }
            else{
              const warning = document.getElementById('warning');
            warning.classList.remove('hidden');
            warning.classList.add('block');
            warning.innerText = "Login lub hasło nie istnieją w bazie danych";
            }
          }
        }else{
          const warning = document.getElementById('warning');
          warning.classList.remove('hidden');
          warning.classList.add('block');
          warning.innerText = "Dane nie mogą być puste";
        }
      }
  return (
    <div>
      {isEnable ? (
        <div className="h-[100vh] w-full bg-[rgba(0,0,0,0.8)] z-10 absolute flex items-center justify-center">
          <div className="bg-white w-[400px] h-[550px] rounded-lg flex flex-col justify-around">
            <div
              className="flex flex-col items-center justify-center my-6 gap-5"
            >
              {login ? (
                <h1 className="text-2xl font-bold">ZALOGUJ SIĘ</h1>
              ) : (" ")}
              <label htmlFor="username">Nazwa użytkownika</label>
              <input
                type="text"
                placeholder="Nazwa użytkownika"
                id="username"
                ref={usernameRef}
                className="bg-gray-500 text-white w-[60%] h-[30px] rounded-md outline-none"
              />
              <label htmlFor="password">Hasło</label>
              <input
                ref={passwordRef}
                type="password"
                placeholder="Hasło"
                id="password"
                className="bg-gray-500 text-white w-[60%] h-[30px] rounded-md outline-none"
              />
              <input
                onClick={LogIn}
                type="submit"
                value={login ? "Zaloguj się" : " " }
                className="bg-blue-500 p-2 w-[200px] rounded-md text-white cursor-pointer"
              />
              <span id="warning" className="hidden">dfsgsg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              {login ? (
                <p>
                  Nie masz konta?{" "}
                  <span className="font-bold cursor-pointer" onClick={register}>
                    Zarejestruj się
                  </span>
                </p>
              ) : (" ")}
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

export default Login;
