import { useState, useContext } from "react";
import AuthContext from "../store/authContext";
import axios from "axios";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const baseURL = "http://localhost:4444";

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
            alert("That username is already taken :(");
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
            alert("Unable to login. Incorrect username or password.");
            setUsername("");
            setPassword("");
          });
  };

  const handleClick = () => {
    setRegister(!register);
  };

  return (
    <main className="h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center h-3/5 gap-6">
        <h1 className="text-green-800 text-3xl">Welcome to Mood!</h1>
        <form onSubmit={submitHandler} className="flex flex-row gap-4">
          <input
            className="px-2"
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="px-2"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="p-1 px-3 bg-green-800 bg-opacity-20 hover:bg-opacity-70 hover:text-green-50 transition-all duration-300 ease-in-out rounded">{register ? "Sign Up" : "Login"}</button>
        </form>
        <button onClick={handleClick} className="p-1 px-3 bg-green-800 bg-opacity-20 hover:bg-opacity-70 hover:text-green-50 transition-all duration-300 ease-in-out rounded">
          Need to {register ? "Login" : "Sign Up"}?
        </button>
      </div>
    </main>
  );
};

export default Auth;
