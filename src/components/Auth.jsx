import { useState, useContext } from "react";
import AuthContext from "../store/authContext";
import axios from "axios";
import Alert from "./Alert";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const baseURL = "https://emotn.herokuapp.com/";

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    register
      ? axios
          .post(`${baseURL}/api/register`, { username, password })
          .then((res) => {
            console.log(res.data);
            authCtx.login(res.data.token, res.data.exp);
            setUsername("");
            setPassword("");
          })
          .catch((err) => {
            console.log(err);
            // alert("That username is already taken :(");
            setMessage(
              "That username is already taken. Please make a change and try again."
            );
            setIsOpen(true);
            setUsername("");
            setPassword("");
          })
      : axios
          .post(`${baseURL}/api/login`, { username, password })
          .then((res) => {
            authCtx.login(res.data.token, res.data.exp);
            setUsername("");
            setPassword("");
          })
          .catch((err) => {
            console.log(err);
            // alert("Unable to login. Incorrect username or password.");
            setMessage(
              "Unable to login due to incorrect username or password. Please try again."
            );
            setIsOpen(true);
            setUsername("");
            setPassword("");
          });
  };

  const handleClick = () => {
    setRegister(!register);
  };

  return (
    <>
      {isOpen ? (
        <main className="h-screen bg-gray-200 flex justify-center">
          <div className="pt-48 max-w-sm">
            <Alert message={message} setIsOpen={setIsOpen} />
          </div>
        </main>
      ) : (
        <main className="h-screen bg-gray-200">
          <div className="flex flex-col items-center justify-center h-3/5 gap-6">
            <h1 className="text-green-800 text-3xl">Welcome to Emotn!</h1>
            <form
              onSubmit={submitHandler}
              className="shadow-lg p-2 rounded bg-green-800 bg-opacity-10 flex flex-col justify-center items-center"
            >
              <input
                className="shadow px-2 rounded m-1"
                type="text"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="shadow px-2 rounded m-1"
                type="password"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="shadow p-1 px-3 bg-green-800 bg-opacity-20 hover:bg-opacity-70 hover:text-green-50 transition-all duration-300 ease-in-out rounded m-1">
                {register ? "Sign Up" : "Login"}
              </button>
            </form>
            <button
              onClick={handleClick}
              className="shadow p-1 px-3 bg-green-800 bg-opacity-20 hover:bg-opacity-70 hover:text-green-50 transition-all duration-300 ease-in-out rounded"
            >
              Need to {register ? "Login" : "Sign Up"}?
            </button>
          </div>
        </main>
      )}
    </>
  );
};

export default Auth;
