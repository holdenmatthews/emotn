import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/authContext";

const Header = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="h-13 bg-gray-200 fixed w-full">
    <header className="h-13 p-3 bg-green-800 bg-opacity-20 w-full">
      <nav>
        {authCtx.token ? (
          <ul className="flex flex-row justify-start gap-2">
            <li className="text-green-900 hover:bg-green-800 hover:bg-opacity-70 hover:text-green-50 transition-all duration-300 ease-in-out rounded px-2">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="text-green-900 hover:bg-green-800 hover:bg-opacity-70 hover:text-green-50 transition-all duration-300 ease-in-out rounded px-2">
              <NavLink to="/new-log">Add Log</NavLink>
            </li>
            <li className="text-green-900 hover:bg-green-800 hover:bg-opacity-70 hover:text-green-50 transition-all duration-300 ease-in-out rounded px-2">
              <button onClick={() => authCtx.logout()}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to="/"></NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
    </div>
  );
};

export default Header;
